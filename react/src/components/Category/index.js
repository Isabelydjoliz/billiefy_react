import videos from "../../json/videos.json";
import styles from "./Category.module.css";

export const categories = [
    "Hit Me Hard and Soft",
    "Happier Than Ever",
    "When We All Fall Asleep, Where Do We Go?",
    "Don't Smile at Me",
    "Vanity Fair"
  ]
  
export function filterCategory(id){
    return videos.filter( video => video.category === categories[id])
  }
  

function Category( { category, children}){
    return (
        <section className={styles.category}>
            <h2>{category}</h2>
            <div>
                { children }
            </div>
        </section>

    );
}

export default Category;