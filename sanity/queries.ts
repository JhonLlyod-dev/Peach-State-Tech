import { SanityClient } from "@sanity/client";
import { sanityClient } from "./sanityClient";
import { Search } from "lucide-react";


export function getNewsCard(){
  return sanityClient.fetch(`
    *[_type == "post"]| order(publishedAt desc){
        title, publishedAt, description,
        "id": _id,
        "coverImage": mainImage.asset._ref,
        "categories": categories[]->{
          title,description
        },
        "slug": slug.current,
      }
    `);
}

export function getSearchResults(query: string) {
  // If no query, fetch all posts
  const filter = query
    ? `&& (title match "${query}*" || description match "${query}*" || author->name match "${query}*")`
    : "";

  return sanityClient.fetch(`
    *[_type == "post" ${filter}] | order(publishedAt desc) {
      title,
      publishedAt,
      description,
      "id": _id,
      "coverImage": mainImage.asset._ref,          // full image object, use urlFor to build URL later
      "categories": categories[]->{
        title,
        description
      },
      "slug": slug.current
    }
  `);
}


 export function getArticle(slug: string, id: string) {

  return sanityClient.fetch(`
    *[_type == "post" && slug.current == "${slug}" && _id == "${id}"]{
      title,
      publishedAt,
      description,
      body,
      "id": _id,
      "coverImage": mainImage.asset._ref,    
      "categories": categories[]->{
        title,
        description
      },
      "slug": slug.current,
      "author": author->{
        name,role,
        "bio": bio[0].children[0].text,
        "authorImg": image.asset._ref,
      }
    }
  `);
 }


 export function sameCategory(category: string, id: string) {
  return sanityClient.fetch(`
    *[_type == "post" && "${category}" in categories[]->title && _id != "${id}" ] | order(publishedAt desc) [0...2] {
      title,
      publishedAt,
      description,
      "id": _id,
      "coverImage": mainImage.asset._ref,
      "categories": categories[]->{
        title,
        description
      },
      "slug": slug.current
    }
  `);
 }

