// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: "E-Learning",
    description: "E-Learning backend with typescript, express and postgressql",
    image:
      "https://e-course-tk.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=64&q=75",
    socials: {
      github: "https://github.com/01011001andra",
    },
    // github: {
    //   dir: ".starters/default/content",
    //   branch: "main",
    //   repo: "docus",
    //   owner: "nuxt-themes",
    //   edit: true,
    // },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
    footer: {
      credits: {
        icon: "",
        text: "Build with 💓 By 01011001andra",
        href: "https://yandramuslim.my.id",
      },
    },
  },
});
