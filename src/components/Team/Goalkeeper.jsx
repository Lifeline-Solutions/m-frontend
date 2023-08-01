import goalkeeper1 from '../../assets/wilsongk.png';
import goalkeeper2 from '../../assets/goalkeeper2.png';
import goalkeeper3 from '../../assets/christiangk.png';

const Goalkeeper = () => {
  const goalkeepers = [
    {
      name1: 'Wilson',
      name2: 'Mwangi',
      image: goalkeeper1,
      number: '01',
      id: 1,
    },
    {
      name1: 'Kevin',
      name2: 'Magona',
      image: goalkeeper2,
      number: '22',
      id: 2,
    },
    {
      name1: 'Christian',
      name2: 'Kimeu',
      image: goalkeeper3,
      number: '33',
      id: 3,
    },
  ];

  return (
    <>
      <div className="my-4 ml-8">
        <h1 className="text-4xl pb-4 md:pb-0 md:p-4 font-bold">Goalkeepers</h1>
        <div className="flex flex-col md:flex-row text-center p-2 gap-8">
          {goalkeepers.map((goalkeeper) => (
            <div
              key={goalkeeper.id}
              className="w-[300px] flex-flex-col cursor-pointer hover:scale-105 hover:text-[#FAE115] transition ease-in-out duration-500"
            >
              <img src={goalkeeper.image} alt="player" />
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h1 className="self-start uppercase">{goalkeeper.name1}</h1>
                  <h1 className="font-semibold text-2xl uppercase">{goalkeeper.name2}</h1>
                </div>
                <h1 className="text-5xl">{goalkeeper.number}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Goalkeeper;
