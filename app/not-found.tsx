export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="space-y-4 flex flex-col items-center">
                <h1 className="text-white text-2xl font-bold">This route does not exist</h1>
                <a className="border-2 border-white border-opacity-75 rounded py-1 px-2 bg-transparent text-white text-sm font-bold hover:opacity-25" href="/">Go To Home</a>
            </div>
        </div>
    )
}