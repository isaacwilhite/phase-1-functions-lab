
function distanceFromHqInBlocks(blockNumber) {
if (blockNumber > 42) {
    return blockNumber - 42
}
return Math.abs(blockNumber - 42)
}
function distanceFromHqInFeet(blockNumber){
return distanceFromHqInBlocks(blockNumber) * 264
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * 264)
}
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400){
        return 0
    }
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02
    }
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        return 25
    }
    else {
        return "cannot travel that far"
    }
}