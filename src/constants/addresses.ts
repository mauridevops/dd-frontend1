import { Networks } from "./blockchain";

const ONE_MAINNET = {
    SPSI_ADDRESS: "0xcAB1d656468d9e3A2F1074C82c33Dd49181aB46a",
    PSI_ADDRESS: "0xDb7f51b799FF2C10Af027b3BF9Af14b398645D83",
    STAKING_ADDRESS: "0xAdb2F5C7C7704FCeC688049c8D8199574D1D8136",
    STAKING_HELPER_ADDRESS: "0xdacF95EB6eAcCDF890e9015998C778e17AF77B99",
    PSI_BONDING_CALC_ADDRESS: "0x819323613AbC79016f9D2443a65E9811545382a5", // todo - need this
    TREASURY_ADDRESS: "0x2F46077254aAd2681ba128606000D850F1a8Dc94",
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.ONE) return ONE_MAINNET;

    throw Error("Network don't support");
};
