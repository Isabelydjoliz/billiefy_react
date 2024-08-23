import videos from "../../json/videos.json"
import styles from "Category.module.css";

export const categories = [
    "Geografia",
    "Como fazer e usar",
    "Astronomia e Geografia",
    "Climatologia, Metereologia, Vegetação",
    "Geologia e Hidrografia"
  ]
  
export function filterCategory(id) {
    return videos.filter( video => video.category === categories[id] )
  }

function Category({  Category, children }) {
    return(
        <section className={styles.category}>
          <h2>{Category}</h2>
          <div>
            {  Children  }
          </div>
        </section>
    );
}

export default Category;