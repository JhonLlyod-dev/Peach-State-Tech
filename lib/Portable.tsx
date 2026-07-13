import { urlFor } from "@/sanity/sanityClient";

export const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      const filename = value?.asset?.originalFilename;
      const altTitle = "Article supporting image: " + filename?.split(".")[0];

      return (
        <div className="my-8 flex-center">
          <img
            src={urlFor(value).width(1000).height(600).url()}
            width={1000}
            height={600}
            alt={altTitle || "Blog image from Peach State Tech"}
            className="rounded-lg object-cover"
          />
        </div>
      );
    },
  },

  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold my-6 text-gray-900 dark:text-zinc-50">
        {children}
      </h1>
    ),

    h2: ({ children }: any) => (
      <div className="mt-8 mb-4">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-zinc-50">
          {children}
        </h2>
        <div className="h-1 w-[30%] bg-gradient-to-r from-peach to-peach/0 rounded-full" />
      </div>
    ),

    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold mt-6 mb-3 text-gray-900 dark:text-zinc-50">
        {children}
      </h3>
    ),

    h4: ({ children }: any) => (
      <h4 className="text-xl font-medium mt-4 mb-2 text-gray-900 dark:text-zinc-100">
        {children}
      </h4>
    ),

    normal: ({ children }: any) => (
      <p className="ml-4 text-base leading-7 mb-4 text-gray-700 dark:text-zinc-300">
        {children}
      </p>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="relative my-8 border-l-4 border-peach bg-peach/5 dark:bg-peach/10 pl-6 pr-4 py-4 rounded-r-lg italic text-gray-700 dark:text-zinc-300 text-md font-light">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="my-5 space-y-3 ml-4">{children}</ul>
    ),

    number: ({ children }: any) => (
      <ol className="my-5 space-y-3 ml-4">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }: any) => (
      <li className="flex items-start gap-3 leading-7 text-gray-700 dark:text-zinc-300">
        <span className="mt-2.5 w-2 h-2 rounded-full bg-peach flex-shrink-0" />
        <span>{children}</span>
      </li>
    ),

    number: ({ children, index }: any) => (
      <li className="flex items-start gap-3 leading-7 text-gray-700 dark:text-zinc-300">
        <span className="mt-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-peach/10 border border-peach/30 text-peach text-xs font-semibold flex-shrink-0">
          {index + 1}
        </span>
        <span>{children}</span>
      </li>
    ),
  },

  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-gray-900 dark:text-zinc-50">
        {children}
      </strong>
    ),

    em: ({ children }: any) => (
      <em className="italic text-gray-800 dark:text-zinc-200">{children}</em>
    ),

    underline: ({ children }: any) => (
      <span className="underline underline-offset-4">{children}</span>
    ),

    "strike-through": ({ children }: any) => (
      <span className="line-through text-gray-500 dark:text-zinc-500">
        {children}
      </span>
    ),

    code: ({ children }: any) => (
      <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-zinc-700 text-peach text-sm font-mono">
        {children}
      </code>
    ),

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