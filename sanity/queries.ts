import { SanityClient } from "@sanity/client";
import { sanityClient } from "./sanityClient";
import { Search } from "lucide-react";


export function getNewsCard(){
  return sanityClient.fetch(`
    *[_type == "post"]| order(publishedAt desc) [0...6] {
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
  const filter = query
    ? `&& (
        title match "${query}*" ||
        description match "${query}*" ||
        author->name match "${query}*" ||
        categories[].title match "${query}*"
      )`
    : "";

  // 👇 limit only when there is NO query
  const limit = query ? "" : "[0...6]";

  return sanityClient.fetch(`
    *[_type == "post" ${filter}]
      | order(publishedAt desc)
      ${limit} {
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



 export function getArticle(slug: string) {

  return sanityClient.fetch(`
    *[_type == "post" && slug.current == "${slug}"]{
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

