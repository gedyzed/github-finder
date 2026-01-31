import { FaEye, FaExclamationCircle, FaLink, FaStar, FaCodeBranch } from "react-icons/fa"

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
            <div className="card-body py-4 px-5">
                <h3 className="mb-1 text-lg font-semibold leading-none">
                    <a href={html_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors">
                        <FaLink className="inline" /> {name}
                    </a>
                </h3>
                <p className="mb-3 text-sm opacity-80 w-full" title={description}>{description}</p>
                <div className="flex flex-wrap gap-2">
                    <div className="badge bg-sky-500/10 text-sky-600 dark:text-sky-400 gap-2 shadow-sm border-0">
                        <FaEye /> {watchers_count}
                    </div>
                    <div className="badge bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 gap-2 shadow-sm border-0">
                        <FaStar /> {stargazers_count}
                    </div>
                    <div className="badge bg-rose-500/10 text-rose-600 dark:text-rose-400 gap-2 shadow-sm border-0">
                        <FaExclamationCircle /> {open_issues}
                    </div>
                    <div className="badge bg-amber-500/10 text-amber-600 dark:text-amber-400 gap-2 shadow-sm border-0">
                        <FaCodeBranch /> {forks}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RepoItem
