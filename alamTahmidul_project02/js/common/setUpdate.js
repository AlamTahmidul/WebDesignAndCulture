const SetLocalUpdate = (updateType, updateValue) => {
    localStorage.setItem("updateValue", updateValue);
    localStorage.setItem("updateType", updateType);
    localStorage.setItem("canUpdate", "true");
}