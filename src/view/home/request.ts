import {useRequest} from '../../assets/hooks/request';
import axios from "axios";

export function useHomeRequest() {
  const { rpcRequest, grpcWeb }: any = useRequest();
  function getUserList () {
    const params = new grpcWeb.getUserListRequest();
    params.setOffset(1);
    params.setLimit(10);
    rpcRequest(params, 'getUserList')
  }
  function getUser(id: number) {
    const params = new grpcWeb.getUserRequest();
    params.setId(id);
    rpcRequest(params, 'getUser');
  }
  function sayHello() {
    const params = new grpcWeb.HelloRequest();
    params.setName('test');
    rpcRequest(params, 'sayHello');
  }
  function test() {
    axios.get('http://127.0.0.1:8089/user/test').then((res: any) => {
      console.log(res);
    })
  }
  return {
    getUserList,
    getUser,
    sayHello,
    test,
  };
}
