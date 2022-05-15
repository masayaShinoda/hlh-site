import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/search.module.scss'


export default function Search({ productsData }) {
    const data = productsData.data.allProductListings

    const [searchString, setSearchString] = useState("")
    
    return <div className={styles.search_component_container}>
        <div className={styles.search_input_container}>
            <input
                name="searchString"
                value={searchString}
                placeholder="Find a product"
                onChange={(e) => setSearchString(e.target.value)}
                className={styles.search_input}
            />
            {searchString && <button aria-label="Clear Search" onClick={() => setSearchString("")}>
                    <p>⨯ Clear Search</p>
                </button>
            }
            <ul className={styles.search_result_list}>
            {searchString && data.map(i => {
                if(i.name.toLowerCase().includes(searchString.toLowerCase()) && i.available) {
                    return <li>
                    <Link href={`/product/${i.id}`}>
                        <a>
                        <p className={styles.search_result_name}>{i.name}</p>
                        <p className={styles.search_result_categ}>{i.category.category}</p>
                        </a>
                    </Link>
                    </li>
                }
            })}
            </ul>
        </div>
    </div>
}