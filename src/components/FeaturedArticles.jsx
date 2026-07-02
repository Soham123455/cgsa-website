import { Link } from "react-router-dom";

import article1 from "../assets/article1.jpg";
import article2 from "../assets/article2.jpg";
import article3 from "../assets/article3.jpg";

function FeaturedArticles() {

  const articles = [

    {
      image: article1,
      title: "The Relevance of Gandhian Philosophy in the 21st Century",
      author: "CGSA Editorial",
      date: "July 2026",
      readTime: "5 min read",
      category: "Research"
    },

    {
      image: article2,
      title: "Truth and Non-Violence: A Way of Life",
      author: "Research Team",
      date: "June 2026",
      readTime: "4 min read",
      category: "Peace Studies"
    },

    {
      image: article3,
      title: "Youth, Service and Social Change",
      author: "Student Contributor",
      date: "June 2026",
      readTime: "6 min read",
      category: "Community"
    }

  ];

  return (

<section
id="articles"
className="py-24 bg-white"
>

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16">

<p className="text-[#D97706] uppercase tracking-[5px] font-semibold">

Knowledge • Research • Reflection

</p>

<h2 className="text-5xl font-bold text-[#0B6E4F] mt-4">

Featured Articles

</h2>

<p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">

Explore insightful writings on Gandhian philosophy,
peace studies, sustainable development,
social harmony and community service.

</p>

</div>

<div className="grid md:grid-cols-3 gap-10">

{articles.map((article,index)=>(

<div
key={index}
className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-500"
>

<div className="overflow-hidden">

<img
src={article.image}
alt={article.title}
className="w-full h-64 object-cover hover:scale-110 transition duration-700"
/>

</div>

<div className="p-8">

<div className="flex justify-between items-center">

<span className="bg-[#F8F5EF] text-[#0B6E4F] px-3 py-1 rounded-full text-sm font-semibold">

{article.category}

</span>

<span className="text-sm text-gray-500">

{article.readTime}

</span>

</div>

<h3 className="text-2xl font-bold text-[#0B6E4F] mt-6 leading-9">

{article.title}

</h3>

<p className="text-gray-600 mt-5">

{article.author}

</p>

<p className="text-sm text-orange-600 mt-2">

{article.date}

</p>

<Link

to="/article"

className="inline-block mt-8 font-semibold text-[#0B6E4F] hover:text-orange-600 transition"

>

Read Full Article →

</Link>

</div>

</div>

))}

</div>

<div className="text-center mt-16">

<Link

to="/articles"

className="bg-[#0B6E4F] text-white px-10 py-4 rounded-xl hover:bg-green-700 transition"

>

View All Articles

</Link>

</div>

</div>

</section>

  );

}

export default FeaturedArticles;