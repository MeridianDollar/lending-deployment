import { task } from 'hardhat/config';
import { getMeridianProtocolDataProvider } from '../../helpers/contracts-getters';

task('print-config:fork', 'Deploy development enviroment')
  .addFlag('verify', 'Verify contracts at Etherscan')
  .setAction(async ({ verify }, DRE) => {
    await DRE.run('set-DRE');
    await DRE.run('meridian:mainnet');

    const dataProvider = await getMeridianProtocolDataProvider();
    await DRE.run('print-config', { dataProvider: dataProvider.address, pool: 'Meridian' });
  });
