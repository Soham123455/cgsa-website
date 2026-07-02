import { Link } from "react-router-dom";

function Articles() {

  const articles = [

    {
      id:1,
      title:"The Relevance of Gandhian Philosophy",
      author:"CGSA Editorial",
      category:"Research"
    },

    {
      id:2,
      title:"Truth and Non-Violence",
      author:"Research Team",
      category:"Peace"
    },

    {
      id:3,
      title:"Youth & Social Change",
      author:"Student Contributor",
      category:"Community"
    },

    {
      id:4,
      title:"Swadeshi in Modern India",
      author:"Faculty Member",
      category:"Economics"
    },

    {
      id:5,
      title:"Khadi Movement",
      author:"Student Research",
      category:"History"
    },

    {
      id:6,
      title:"Gandhi and Sustainability",
      author:"Environment Cell",
      category:"Environment"
    }

  ];

  return (

<div className="min-h-screen bg-[#F8F5EF]">

<div className="max-w-7xl mx-auto py-20 px-6">

<h1 className="text-5xl font-bold text-[#0B6E4F] mb-4">

Articles

</h1>

<p className="text-lg text-gray-600 mb-12">

Browse all published articles.

</p>

<div className="grid md:grid-cols-3 gap-8">

{articles.map(article=>(

<div
key={article.id}
className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
>

<p className="text-sm text-orange-600">

{article.category}

</p>

<h2 className="text-2xl font-bold mt-4">

{article.title}

</h2>

<p className="mt-5 text-gray-600">

{article.author}

</p>

<Link
to="/article"
className="inline-block mt-8 text-[#0B6E4F] font-semibold hover:underline"
>

Read →

</Link>

</div>

))}

</div>

</div>

</div>

  );

}

export default Articles;