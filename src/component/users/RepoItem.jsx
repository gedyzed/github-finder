import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa"

const RepoItem = ({ repo }) => {

    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
    } = repo
    return (
        <div className="mb-2 rounded-md card bg-base-200/50 hover:bg-base-200 transition-all duration-300 hover:scale-[1.01] border border-base-300">
            <div className="card-body">
                <h3 className="mb-2 text-xl font-semibold">
                    <a href={html_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors">
                        <FaLink className="inline" /> {name}
                    </a>
                </h3>
                <p className="mb-3 opacity-80">{description}</p>
                <div className="flex flex-wrap gap-2">
                    <div className="badge badge-info gap-2 badge-lg shadow-sm">
                        <FaEye /> {watchers_count}
                    </div>
                    <div className="badge badge-success gap-2 badge-lg shadow-sm">
                        <FaStar /> {stargazers_count}
                    </div>
                    <div className="badge badge-error gap-2 badge-lg shadow-sm">
                        <FaInfo /> {open_issues}
                    </div>
                    <div className="badge badge-warning gap-2 badge-lg shadow-sm">
                        <FaUtensils /> {forks}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RepoItem
