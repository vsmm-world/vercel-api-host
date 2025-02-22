// cron.service.ts
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import axios from 'axios';

@Injectable()
export class CronService {
  // Runs every 10 seconds
  @Cron(CronExpression.EVERY_MINUTE)
  handleCron() {
    axios
      .get('https://api.portglint.co')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log('Cron job running every 10 seconds');
  }
}
