import { Link } from "react-router-dom";
export default function Projects() {
  const ProjectWork = [
    {
      name: "Monkeez",
      image: "./images/monkeez.png",
      twitter: "https://www.twitter.com/MonkeezNFT",
      website: "https://www.monkeez.io",
      description:
        "Monkeez is a 4000 stakeable pfp collection on the Avalanche blockchain building the Zungle with upgradeable NFTs to battle",
    },
    {
      name: "Cash Cows",
      image: "./images/cash-cows.png",
      twitter: "https://www.twitter.com/CashCowsMoo",
      website: "https://www.monkeez.io",
      description:
        "Monkeez is a 4000 stakeable pfp collection on the Avalanche blockchain building the Zungle with upgradeable NFTs to battle",
    },
    {
      name: "Emo Buddies",
      image: "./images/emo-buddies.png",
      twitter: "https://www.twitter.com/EmoBuddiesNFT",
      website: "https://www.emobuddies.io",
      description:
        "Emo Buddies is a PFP Collection on the Ethereum blockchain centered around mental health. It's ok to not be ok",
    },
    {
      name: "Scare Bears",
      image: "./images/scarebears.png",
      twitter: "https://twitter.com/ScareBearsNFTs",
      website: "https://scarebears.ca/",
      description: "Scare Bears is a pfp collection on Polygon with ",
    },
  ];
  return (
    <>
      <div class=" bg-gray-900">
        <div class="flex justify-center flex-col">
          <h1 class="text-3xl text-white m-auto my-4">Featured Work</h1>
          <div class="flex flex-col m-auto">
            {ProjectWork.map((item, index) => {
              return (
                <div key={index} class="m-4 overflow-hidden rounded-lg">
                  <Link
                    to={{ pathname: item.twitter }}
                    target="_blank"
                    class="overflow-hidden flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 hover:cursor-pointer"
                  >
                    <img
                      class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={item.image}
                      alt=""
                    />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.name}
                      </h5>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
