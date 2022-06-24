import React from "react"
import * as fs from "fs"

const Sitemap = () => {
    return null
}

export const getServerSideProps = async ({ res }) => {

    const BASE_URL = 'https://corentincolsenet-dev.com'
    const staticPaths = fs
        .readdirSync("pages")
        .filter((staticPage) => {
        return ![
            "sitemap.xml.js",
            "404.js",
            "_app.js",
            "_document.js",
            "api"
        ].includes(staticPage)
        })
    .map((staticPagePath) => {
        return `${BASE_URL}/${staticPagePath.replace('.js', '')}`
    })

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${staticPaths.map((url) => (`
                    <url>
                    <loc>${url}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>monthly</changefreq>
                    <priority>1.0</priority>
                    </url>
                `
                )).join("")
            }
        </urlset>
    `

    res.setHeader("Content-Type", "text/xml")
    res.write(sitemap)
    res.end()

    return {
        props: {},
    }
}

export default Sitemap