import Link from "next/link";

interface PaginationProps {
    pages: number;
    pageNumber: number;
    route: string;
  }

const Pagination = ({ pages, pageNumber, route }: PaginationProps) => {
  
    const style = "bg-cc-dark text-cc-red font-semibold py-2 px-3 rounded-md hover:bg-cc-red hover:text-cc-white transition-colors duration-150";
    const pagesArray:number[] = [];
    for (let i = 1; i <= pages; i++) {
    pagesArray.push(i);
    }

    return (
    <div className="flex justify-center space-x-2 my-4 overflow-x-auto">
      {pageNumber > 1 && 
        <Link 
          href={`${route}?pageNumber=${pageNumber - 1}`}
          className={`${style}`}>
            {'<<'}
        </Link>
      }
        {pagesArray.map(page => 
            <Link
              href={`${route}?pageNumber=${page}`} 
              key={page} 
              className={`${pageNumber === page && "bg-cc-red text-cc-white"} ${style}`}>
                {page}
            </Link>
        )}
        {pageNumber < pages && 
        <Link
          href={`${route}?pageNumber=${pageNumber + 1}`} 
          className={`${style}`}>
            {'>>'}
        </Link>
        }
    </div>
  );
}

export default Pagination;