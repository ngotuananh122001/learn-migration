export interface ICurrencyConfigInterface {
    swapId: number,
    network: string,
    chainName: string,
    chainId: string,
    tokenAddress: string,
    averageBlockTime: number,
    requiredConfirmations: number,
    tempRequiredConfirmations: number,
    rpcEndpoint: string,
    explorerEndpoint: string,
}