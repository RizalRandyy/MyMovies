"use client"
import { useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ lastPage, setPage }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const page = parseInt(searchParams.get('page')) || 1;

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        });
    }

    const handleNextPage = () => {
        const newPage = page + 1;
        setPage(newPage);
        router.push(`/?page=${newPage}`);
        scrollTop();
    }

    const handlePrevPage = () => {
        const newPage = page - 1;
        setPage(newPage);
        router.push(`/?page=${newPage}`);
        scrollTop();
    }

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-stone-600 font-semibold text-2xl w-full">
            { page <= 1 ? null : 
                <button onClick={handlePrevPage} className="transition-all hover:text-red-600">Prev</button>
            }

            <p>{page} of {lastPage}</p>

            { page >= lastPage ? null : 
                <button onClick={handleNextPage} className="transition-all hover:text-red-600">Next</button>
            }
        </div>
    )
}

export default Pagination;
