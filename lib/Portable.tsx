import { urlFor } from "@/sanity/sanityClient";

export const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8 flex-center">
        <img
          src={urlFor(value).width(1000).height(600).url()}
          alt={value.alt || "Blog image"}
          className="rounded-lg object-cover"
        />
      </div>
    ),
  },

  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold my-6">{children}</h1>
    ),

    h2: ({ children }: any) => (
      <h2 className="text-3xl font-semibold mt-8 mb-4">{children}</h2>
    ),

    /** ✅ ADDED */
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold mt-6 mb-3">{children}</h3>
    ),

    /** ✅ ADDED */
    h4: ({ children }: any) => (
      <h4 className="text-xl font-medium mt-4 mb-2">{children}</h4>
    ),

    normal: ({ children }: any) => (
      <p className="ml-4 text-base leading-7 mb-4 text-muted-foreground">
        {children}
      </p>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="my-8 border-l-4 border-peach pl-6 italic text-gray-700 text-md font-extralight py-4">
        {children}
      </blockquote>
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

    /** ✅ ADDED */
    em: ({ children }: any) => (
      <em className="italic">{children}</em>
    ),

    /** ✅ ADDED */
    link: ({ value, children }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-peach underline underline-offset-4 hover:opacity-80 transition"
      >
        {children}
      </a>
    ),
  },
};
