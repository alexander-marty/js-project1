function canAccessWebSite(age) {
    if (age <= 18) {
        return false;
    } else {
        return true;
    }
}

function canAccessWebSite1(age) {
    if (age < 18) {
        return false;
    }
    return true;

}

function canAccessWebSite2(age) {
    age < 18 ? "true" : "false";
    return true;

}

const canAccessWebSite3 = age => age < 18;


console.log(canAccessWebSite(15))