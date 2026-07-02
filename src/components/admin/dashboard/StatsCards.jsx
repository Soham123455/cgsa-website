function StatsCards({
  total,
  pending,
  approved,
  rejected,
}) {
  const cards = [
    {
      title: "Total Articles",
      value: total,
      color: "text-green-700",
    },
    {
      title: "Pending Review",
      value: pending,
      color: "text-orange-500",
    },
    {
      title: "Approved",
      value: approved,
      color: "text-green-500",
    },
    {
      title: "Rejected",
      value: rejected,
      color: "text-red-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

      {cards.map((card, index) => (

        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
        >
          <h2 className={`text-4xl font-bold ${card.color}`}>
            {card.value}
          </h2>

          <p className="mt-2 text-gray-600">
            {card.title}
          </p>
        </div>

      ))}

    </div>
  );
}

export default StatsCards;