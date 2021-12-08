import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IpReceiverService } from '../services/ip-receiver.service';
import { IpDialogComponent } from '../components/ip-dialog/ip-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ip-receptor-page',
  templateUrl: './ip-receptor-page.component.html',
  styleUrls: ['./ip-receptor-page.component.scss']
})
export class IpReceptorPageComponent implements OnInit {

  constructor(
    private _ipReceiver: IpReceiverService,
    private _dialog: MatDialog,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  public submitUserInputtedText(event: any): void {
    this._ipReceiver.checkConnectionToDatabaseApi(event.target.value)
      .subscribe( isDatabaseConnected => {
        console.log(isDatabaseConnected);
        if(isDatabaseConnected){
          console.log("Redirecting to main page...");
          this._router.navigate(['/home']);
        }
        else {
          this._openDialog();
          console.log("Not connected.")
        }
      });
    // this._openDialog();
  }

  private _openDialog(): void {
    this._dialog.open(IpDialogComponent);
  }

}
