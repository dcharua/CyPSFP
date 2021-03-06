import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { read, IWorkBook } from 'ts-xlsx';
import * as XLSX from 'ts-xlsx';
import { AlertService } from '../_services';
declare var $:any;
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})

export class UploadComponent implements OnInit {
  arrayBuffer: any;
  file: File;
  empalmadas: Array<any> = [];

  constructor(
    public route: ActivatedRoute,
    private alertService: AlertService) { }

  public ngOnInit() {
  }


  incomingfile(event) {
    this.file = event.target.files[0];
  }

  Upload() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[1];
      var worksheet = workbook.Sheets[first_sheet_name];
      // console.log(XLSX);
      // console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
      this.check(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
    }
    fileReader.readAsArrayBuffer(this.file);
  }

  public check(arr) {
    var actualSemester;
    var added = false;
    for (var i in arr) {
      if(arr[i].Semestre == undefined)
        continue;
      else
        actualSemester = arr[i].Semestre;

      for (var j in arr) {
        if(i == j) continue;
        if(arr[j].Semestre >= actualSemester-1 && arr[j].Semestre <= actualSemester+1){
          added = false;
          if(arr[j]['Día 1'] == arr[i]['Día 1'] && arr[j]['Hora 1'] == arr[i]['Hora 1'] && arr[j]['Día 1'] != undefined && arr[j]['Hora 1'] != undefined){
            for (var k in this.empalmadas) {
              if(this.empalmadas[k].primera == arr[j] && this.empalmadas[k].segunda == arr[i] && this.empalmadas[k].dia == 1){
                added = true;
                break;
              }
            }
            if (!added)
              this.empalmadas.push({ primera: arr[i], segunda: arr[j], dia: 1 })
          }
          if(arr[j]['Día 2'] == arr[i]['Día 2'] && arr[j]['Hora 2'] == arr[i]['Hora 2'] && arr[j]['Día 2'] != undefined && arr[j]['Hora 2'] != undefined){
            for (var k in this.empalmadas) {
              if(this.empalmadas[k].primera == arr[j] && this.empalmadas[k].segunda == arr[i] && this.empalmadas[k].dia == 2){
                added = true;
                break;
              }
            }
            if(!added)
              this.empalmadas.push({primera: arr[i], segunda: arr[j], dia:2})
          }
        }
      }

    }
    console.log("actualizado");
    if(this.empalmadas.length > 0){
      $("#results").fadeIn();
    } else{
        this.alertService.error("No se encontraron empalmes :)");
    }
  }
}
