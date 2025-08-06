export default function NotFound() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-5xl font-bold mb-4">404</h2>
                <p className="text-lg mb-6">We couldn't find that page (I probably haven't made it yet! - Elijah)</p>
                <a
                    href="/"
                    className="inline-block bg-brand-primary text-white px-4 py-2 rounded"
                >
                    Return Home
                </a>
            </div>
        </div>
    )
}