export default function thumbnail(url) {
        const parts = url.split('/')
        parts.splice(3, 0, "resize=width:100")
        return parts.join('/')
    }

