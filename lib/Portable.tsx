
import { urlFor } from "@/sanity/sanityClient";



export const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="my-8 flex-center">
          <img
            src={urlFor(value).width(1000).height(600).url()}
            alt={value.alt || "Blog image"}
            className="rounded-lg object-cover"
          />
        </div>
      );
    },
  },

  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold mt-10 mb-6">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-semibold mt-8 mb-4">{children}</h2>
    ),
    normal: ({ children }: any) => (
      <p className="text-base leading-7 mb-4 text-muted-foreground">
        {children}
      </p>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 my-4 space-y-2">{children}</ul>
    ),
  },

  listItem: {
    bullet: ({ children }: any) => (
      <li className="leading-7">{children}</li>
    ),
  },

  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
  },
};
