const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/bonnie-py-dev/Desktop/strapi-gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/bonnie-py-dev/Desktop/strapi-gatsby/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/bonnie-py-dev/Desktop/strapi-gatsby/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/bonnie-py-dev/Desktop/strapi-gatsby/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/bonnie-py-dev/Desktop/strapi-gatsby/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/bonnie-py-dev/Desktop/strapi-gatsby/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/home/bonnie-py-dev/Desktop/strapi-gatsby/src/pages/projects.js")))
}

