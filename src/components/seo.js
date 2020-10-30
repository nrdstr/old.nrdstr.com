import React from 'react'
import { Helmet } from 'react-helmet-async'
import PropTypes from "prop-types"

const Seo = ({ title, description, meta }) => {
    const defaultDescription = `We deliver strong modern graphic design services , web design and development services, social media branding, video editing, artist branding , and much more. Contact us today to discuss your next web, creative, or marketing project.`
    const d = description ? description : defaultDescription
    return (
        <Helmet
            htmlAttributes={{
                lang: `en`,
            }}
            title={title ? title : `graphic design, web design, web maintenance, and more`}
            titleTemplate={title ? `%s | nrdstr digital design and development` : null}
            meta={[
                {
                    name: `description`,
                    content: d,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: d,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:url`,
                    content: `https://www.nrdstr.com`
                },
                {
                    property: `og:image`,
                    content: `/social.png`,
                },
                {
                    name: `twitter:card`,
                    content: `summary_large_image`,
                },
                {
                    name: `twitter:url`,
                    content: `https://www.nrdstr.com`,
                },
                {
                    name: `twitter:creator`,
                    content: `@nrdstr_`,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: d,
                },
                {
                    name: `twitter:image`,
                    content: `/social.png`,
                },
            ].concat(meta)}
        />
    )
}

Seo.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}

export default Seo