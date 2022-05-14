const LiquidityMigrator = artifacts.require("LiquidityMigrator")
const BonusToken = artifacts.require("BonusToken")

module.exports = async function (deployer) {
    deployer.deploy(BonusToken)
    const bonusToken = await BonusToken.deployed()

    const routerAddress = ''
    const pairAddress = ''
    const routerForkAddress = '0x9E2DcCAe4A774eFc50bFCb20d7c708028A84Ff66'
    const pairForkAddress = ''

    await deployer.deploy(
        LiquidityMigrator,
        routerAddress,
        pairAddress,
        routerForkAddress,
        pairForkAddress,
        bonusToken.address
    )

    const liquidityMigrator = await LiquidityMigrator.deployed()
    await bonusToken.setLiquidator(liquidityMigrator.address)
};
