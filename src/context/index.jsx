import React, { useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  //address of the smart contract
  const { contract } = useContract(
    "0xd6E095D59F1B42225F0D6df5249B9EfaFb32dd10"
  );

  //two ways to call write function
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  ); //to call the function and create a campaign passing all the parameters

  const address = useAddress(); //address of smart wallet
  const connect = useMetamask(); //to connect smart wallet

  const publishCampaign = async (form) => {
    try {
      const data = await createCampaign([
        address,
        form.title,
        form.description,
        form.target,
        new Date(form.deadline).getTime(),
        form.image,
      ]);

      console.log("contract call success", data);
    } catch (error) {
      console.log("contract call failure", data);
    }
  };

  const getCampaigns = async () => {
    const campaigns = await contract.call("getCompaigns");
    console.log(campaigns);

    //numbers into human readable format
    const parsedCampaigns = campaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        campaign.amountCollected.toString()
      ),
      image: campaign.image,
      pId: i,
    }));
    return parsedCampaigns;
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
        getCampaigns,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
