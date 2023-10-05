import { Paper, styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import styles from "./searchbar.module.css";
import Link from "next/link";
import { useRouter } from 'next/router';
function SearchBar() {
    const [searchVal, setSearchVal] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const router = useRouter();
    const wrapperRef = useRef(null);
    useOutsideHandler(wrapperRef);
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    function useOutsideHandler(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setIsFocus(false)
                    setSearchVal('');
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    // Search By dev
    const [searchValue, setSearchValue] = useState('');
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setSearchValue("")
            router.push(`/search/${searchValue.toLowerCase()}`)
        }
    }
    return (
        <div className={styles.searchBox}>
            <input className={styles.searchInput} name='search'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Search" onKeyDown={handleKeyDown} />
            <button className={styles.searchButton} onClick={() => setSearchValue("")}>
                {searchValue ? <Link href={`/search/${searchValue.toLowerCase()}`} >
                    <i className="ri-search-line"></i>
                </Link>
                    : <Link href="javascript:void(0);"><i className="ri-search-line"></i>
                    </Link>}

            </button>
        </div>
    );
}


export default SearchBar