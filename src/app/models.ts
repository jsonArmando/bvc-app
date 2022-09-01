export class EventStatus {
    constructor(public event: string, public date_event: string, public amount_event: number) {}
  }
   
  export class ResponseResult {
    constructor(public status: number, public message: string) {}
  }