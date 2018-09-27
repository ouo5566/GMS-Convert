package com.gms.web.msg;

import com.gms.web.msg.Message;

public interface MessageMapper {

  public void create(Message vo) throws Exception;

  public Message readMessage(Integer mid) throws Exception;

  public void updateState(Integer mid) throws Exception;

}
