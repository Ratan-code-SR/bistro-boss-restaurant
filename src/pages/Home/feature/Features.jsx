import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import featureImage from '../../../assets/home/featured.jpg'

const Features = () => {
    return (
        <section className="feature-image bg-fixed text-white py-20 ">
            <SectionTitle
                heading={'Check it out'}
                subHeading={'Feature Items'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center gap-10 py-30 px-36 ">
                <div>
                    <img  src={featureImage} alt="" />
                </div>
                <div className="bg-slate-500 opacity-50 p-2">
                    <p>May 16 2024</p>
                    <p>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ratione unde aliquid culpa cum sunt corporis fugiat consectetur neque. Consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ratione unde aliquid culpa cum sunt corporis fugiat consectetur neque. Consequuntur.

                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features;