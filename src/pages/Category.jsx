import { useParams } from 'react-router-dom';

import CategoryHero from '../components/Category/CategoryHero';
import CategoryStory from '../components/Category/CategoryStory';
import CategoryProducts from '../components/Category/CategoryProducts';
import CategoryCTA from '../components/Category/CategoryCTA';
//import CategoryExperience from '../components/Category/CategoryExperience';

import Footer from '../components/layout/Footer'


function Category() {

    const { category } = useParams();

    return (
        <main className='category-page'>
            <CategoryHero category={category} />
            <CategoryStory category={category} />
            <CategoryProducts category={category} />
            <CategoryCTA category={category} />
            <Footer />
        </main>
    )
}

export default Category;