package com.geetech.geetech.exception;

public class Access {

    private String biba;
    private String login;
    private boolean access;

    public String getBiba() {
        return biba;
    }

    public void setBiba(String biba) {
        this.biba = biba;
    }

    public Access(String login) {
        this.login = login;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public Boolean getAccess() {
        return access;
    }

    public void setAccess(Boolean access) {
        this.access = access;
    }
}
