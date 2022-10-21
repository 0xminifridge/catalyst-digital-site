export default function Services() {
  const ServiceItems = [
    {
      name: "Web2",
      description:
        "We build custom websites and metadata APIs to ensure your data is working and flowing as expected",
    },
    {
      name: "Web3",
      description:
        "We build tailored smart contracts and integrated mint engines native to your site to give your app a branded feel",
    },
    {
      name: "Metadata",
      description:
        "We generate and upload all metadata to a decentralized image pinning service accessible from anywhere by your community",
    },
  ];
  return (
    <>
      <div class="md:h-[100vh] bg-gray-900">
        <div class="flex justify-center flex-col">
          <h1 class="text-3xl text-white m-auto my-4">What We Offer</h1>
          <div class="flex flex-row flex-wrap m-auto">
            {ServiceItems.map((item, index) => {
              return (
                <div class="m-4 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                  <p class="font-normal text-gray-700 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
