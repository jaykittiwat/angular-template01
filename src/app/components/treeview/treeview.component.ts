import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ITreeOptions, TreeComponent, TreeModel, TreeNode } from '@circlon/angular-tree-component';

import { ApiserviceService } from './../../backend/apiservice.service'


@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})




export class TreeviewComponent implements OnInit {
  @ViewChild('tree1') treeComponent1: TreeComponent;
  @ViewChild('tree2') treeComponent2: TreeComponent;
  @ViewChild('inputs') public inputs: ElementRef<HTMLInputElement>[];
  constructor(private APIconnrct: ApiserviceService) { }
  node_parentOne :any= []; //เก็บ รายการหลัก
  node_parentTwo :any= []; //เก็บ รายการย่อย
  selectedTreeList :any= [] //เก็บรายการย่อยเมื่อคลิกเลือก

  options1: ITreeOptions = {
    useCheckbox: true,
    displayField: 'title',
    childrenField: 'child',
  };

  options2: ITreeOptions = {
    useCheckbox: true,
    displayField: 'title',
    childrenField: 'child',
  };
  


  async ngOnInit() {
    const result = await this.APIconnrct.getRequest_shotkeys().toPromise()
    this.node_parentTwo = [result[1]]
    this.node_parentOne=[result[0]]
  }

  
  onUpdateData1() {
    const treeModel: TreeModel = this.treeComponent1.treeModel;
    const firstNode: TreeNode = treeModel.getFirstRoot();

    firstNode.expand();
   
  }
  onUpdateData2() {
    const treeMode2: TreeModel = this.treeComponent2.treeModel;
    const secondNode: TreeNode = treeMode2.getFirstRoot();

    secondNode.expand();
  }





  //เลือก  ในส่วนหมวดย่อย
  onSelect(event) {
    this.selectedTreeList.push(event.node.data)
  }

  // ไม่เลือก ในส่วนหมวดย่อย
  onDeselect(event) {
    //id หากไม่ได้กำหนดมาในชุดข้อมูลJSON   จะกำหนดให้อัตโนมัติ
    this.selectedTreeList.map((item, index) => { item.id === event.node.data.id ? this.selectedTreeList.splice(index, 1) : null })
  }

  onShow() {
    console.log(this.selectedTreeList);
  }

}
