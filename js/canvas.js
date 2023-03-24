function drawCustomUnit(x, y, xheight, yheight, color, ctx, kappa) {
    ctx.fillStyle= color;
    ctx.fillRect(x, y, xheight, yheight);
    return _$K.yield(kappa, _$Constants.UNIT);

}