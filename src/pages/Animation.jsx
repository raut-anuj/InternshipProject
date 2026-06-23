import AnimationCard from '../components/AnimationCard';

function Animation() {
  const stats = [
    {
      number: 150,
      suffix: 'k+',
      title: 'Attendees',
    },
    {
      number: 120,
      suffix: '+',
      title: 'Countries',
    },
    {
      number: 42,
      suffix: 'k+',
      title: 'Exhibition Area',
    },
    {
      number: 400,
      suffix: '+',
      title: 'Exhibitors',
    },
    {
      number: 600,
      suffix: '+',
      title: 'Technology Use-cases',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Scroll karne ke liye space */}
      <div className="h-screen"></div>

      <div className="flex flex-wrap gap-6 justify-center">
        {stats.map((item, index) => (
          <AnimationCard
            key={index}
            number={item.number}
            suffix={item.suffix}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Animation;