var width = 500,
    height = 680;
 
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);
 
var d0 = "m 141,46.362183 -32,-6 -13,-4 -31,-28.0000004 -17,-7 -13,-7 -11,0 -8,6.00000002 3,10.00000038 -7,4 -4,-4 -22,8 -9,23 -11,-7 -23,11 -9,13 11,12 -3,0 -9,3 2,18 -13,-3 -16,12.999997 -3,8 2,10 5,8 -9,11 3,8 -19,-2 -12,-3 -9,3 3,8 -4,13 15,16 -3,10 -6,-6 -4,28 c 0,0 -10,-5 -13,-9 -3,-4 -19,-40 -19,-40 l 0,-5 -7,4 -20,24 -12,15 -2,16 6,17 6,14 -7,11 -20,18 -11,37 -13,17 -31,18 -10,8 -27,6 -8,7 -28,-6 -9,17 -5,4 -30,8 -7,6 -7,12 -20,7 -21,-3 -17,2 -14,9 -21,23 -19,24 -28,14 -11,10 -5,32 -9,5 -7,0 -4,-31 -8,2 -10,39 12,17 1,11 -3,27 -7,17 0,27 14,15 9,20 21,23 13,16 1,24 -15,-8 -28,-29 -3,13 17,17 10,14 -23,-3 4,9 32,35 12,21 3,17 32,38 17,25 5,27 1,16 12,26 30,43.00002 7,17 5,44 3,23 -1,13 -5,17 -7,2 -15,-6 0,11 3,24 6,10 11,-4 21,7 17,16 15,6 28,1 28,-3 29,-11 9,-8 14,-19 15,-5 11,-5 3,-16 19,-11 43,-7 27,-5 23,5 38,-7 7,0 9,2 18,-9 12,-17 5,-26 7,-5 20,-4 57,-37.00002 18,-3 38,2 21,-12 34,-18 18,-8 -34,-905.999997 z",
    d1 = "m 150,54.362183 15,-3 15,4 1,-13 -15,-15 -1,-10 6,-11.0000004 11,-1 6,-30.9999996 9,3 11,-14 -6,-12 0,-10 9,0 3,-9 12,-7 2,-14 15,0 8,-11 21,6 22,-3 12,4 17,-10.000003 15,-4 -4,-20 -10,-9 -14,-2 -10,-11 24,-10 20,22 10,-7 12,19 24,6 13,-7 2,9 44,8 6,1 15,12.000003 8,1 8,-8.000003 14,2 3,7.000003 13,-3 6,13 9,1 7,-10 -7,-8.000003 14,-7 3,0 6,9.000003 7,2 5,2 5,8 -10,11 -7,11 -8,1 2,13 -6,9 -9,-3 -20,13 0,17 6,5.9999996 -9,16 1,5.0000004 -9,7 -12,20 -4,3 4,14 38,25 4,8 17,9 4,12.999997 19,-3 20,13 16,8 8,15 -18,505 -98,-3 -123,-2 -163,5 -44,1 z",
    d2 = "m 739,825.36218 146,12 107,10 120,13 15,-15 12,-3 10,3 21,-1 7,5 6,2 11,2 7,5 5,4 7,8 1,10 7,2 8,-4 5,-9 9,5 11,0 4,-10 -1,-9 24,-11 11,3 10,5 24,-5 -1,26 -13,24 -11,31 -13,29 0,18 -9,21 -11,24.00002 -10,12 -8,12 -5,14 -36,23 -28,33 -9,22 -11,20 -9,30 -13,13 -18,19 -10,25 -8,24 -6,36 -5,6 -66,-43 1,-15 -4,-10 0,-17 -18,-8 -21,3 -19,-4 -23,-1 -27,-9 -17,-7 -15,3 -1,6 1,6 -3,1 -7,-4 -11,-18 -12,-13 -16,-9 -5,-9 -7,-8 4,-17 -10,-4.5 -18.5,-6 -8.5,6.5 -7,-16 -1,-9 -19,-13 -9,-3 -9,5 -21,-8 z",
    d4 = "m 1057,1200.3622 9,-14 12,0 4,11 -9,11 -5,20 -9,-10 -3,-10 z",
    d5 = "m 721,1096.3622 -12,215 24,17 12,-8 17,7 26,14 22,16 43,-20 9,-8 13,-19 6,11 -6,14 -2,6 24,14 14,9 4,7 38,-8 31,-28 27,-9 34,-1 31,2 12,-12 -68,-45 -3,-8 3,-12 -4,-4 -2,-16 -9,-3 -12,-2 -9,4 -13,-4 -9,-4 -12,5 -9,-4 -29,-10 -10,-4 -12,0 -2,11 -6,3 -9.5,-1 -9.5,-15 -8,-14 -15,-12 -14,-5 -7.5,-13.5 -1,-14.5 -3,-10 -10,-3 -8.5,-2 -8,7 -8,-12 -5,-7 0,-9 -17,-10 -9,3 -11,-2 z",
    d6 = "m 924,1631.8622 9.5,-16 8,-3 10.5,-20.5 4.5,0 12,2 6,-7.5 8.5,-29 10,-9.5 2.5,-22.5 1,-19 4.5,-13 c 0,0 -10,-14 -12,-14 -2,0 -14.5,8.5 -14.5,8.5 l -26,0.5 -11,3 -18,4.5 -31,-15 -32,-16.5 -4.5,0.5 -3,10.5 -2.5,10.5 7.5,23.5 7.5,17.5 8.5,16 3.5,14 -3,9.5 -0.5,7.5 14.5,32 7.5,17 6,3 11,-1 10.5,6.5 z",
    d7 = "m 625,149.36218 15,5 22,8 12,9 10,21 18,7 19,15 17,-4 17,-2 11,-15 12,-21 13,-17 9,-30 2,-19 13,-33.999997 -6,-16 5,-27 -3,-12 -5,-12.0000004 8,-15 8,-11.9999996 -2,-22 10,-5 7,-9 -13,-12 22,-34.000003 8,-34 3,-9 11,-6 10,-10 5,2 -1,7 12,10 1,43 6,7.000003 8,5 -8,14 17,20 0,8 5,15 -3,35.9999996 7,25.0000004 4,18 12,6 13,-12 16,-3 4,17 21,18 10,8 -1,28.999997 5,24 -1,15 -2,14 23,48 7,13 -1,22 -7,16 13,5 -3,24 -1,10 14,17 21,14 21,2 4,12 4,14 23,4 10,21 9,-7 16,15 -5,12 11,24 11,25 4,38 0,20 14,3 4,4 2,-22 9,6 22,24 9,16 -5,32 24,33 14,3 9,14 3,17 18,13 4,13 5,13 8,7 -1,17 8,14 -2,7 -6,9 1,39 -1,10 -8,-1 5,13 9,20 -2,25 -24,2 -20,-8 -30,16 -2,15 -12,-1 -5,-1 -9,11 -5,1 2,-10 -7,-8 -5,-7 -13,-5 -13,0 -6,-10 -24,4 -15,-8 -14,5 -14,14 -157,-15 -86,-10 -117,-8 -11,-1 11,-160 -142,-7 z",
    d8 = "m 700.5,1306.8622 -14,-2 -10.5,-12 -19,-34.5 -4,-13 4,-10 -5,-22 -3.5,-21.5 -13.5,-12 -14.5,-12 -11,1.5 -6.5,2 -13,-1.5 1,-6.5 12.5,-21 2.5,-11 -0.5,-11 -16.5,-26 -3.5,10 -11,37.5 -8.5,4 -23.5,0 -5,-11.5 5.5,-4 12.5,-0.5 2,-8 3,-26 5.5,-20 14,-12 3.5,-6 -0.5,-16 6.5,-3.5 2,-2.5 -11.5,-32 -4.5,1 -1,18 -7,7.5 -12.5,21.5 -6,12 -12,2 -18,12.5 -13.5,19.5 -11.5,18.5 -11.5,8.5 -11,-4.5 -11.5,-38.5 -0.5,-10 -14,-13.5 -9.5,-21.5 -12.5,-4.5 -9,-9 -4,-7.5 6,-11 -10,-5.50002 -5,-7.5 -6.5,-10.5 -9.5,-4.5 -15.5,5 -8,-6 -10.5,-5.5 -10.5,-2 -5,4 -8,0 -12,-8.5 -18,-11 -15.5,-7.5 -5.5,-1 -4.5,1 -7.5,4 -23.5,0.5 -58,4 -12.5,-297 181,-3.5 142.5,0.5 146.5,6 100,4 -37.5,644.00002 z";

var digits=new Array(d0,d1,d7,d2,d4,d6,d5,d8);
var position=1;

svg.append("path")
    .attr("transform", "translate(150,300)scale(.2,-.2)")
  .style("stroke", "red")
  .style("fill", "gray")
  .style("stroke-width", "9")
    .attr("d", d0)
    .call(transition, digits[0], digits[position]);
 
function transition(path, d0, d1) {
  position++;
  if(position==8)
  {
    position=0;
  }
  path.transition()
      .duration(300)
      .attrTween("d", pathTween(d1, 4))
      .each("end", function() { d3.select(this).call(transition, d1, digits[position]); });
}
 
function pathTween(d1, precision) {
  return function() {
    var path0 = this,
        path1 = path0.cloneNode(),
        n0 = path0.getTotalLength(),
        n1 = (path1.setAttribute("d", d1), path1).getTotalLength();
 
    // Uniform sampling of distance based on specified precision.
    var distances = [0], i = 0, dt = precision / Math.max(n0, n1);
    while ((i += dt) < 1) distances.push(i);
    distances.push(1);
 
    // Compute point-interpolators at each distance.
    var points = distances.map(function(t) {
      var p0 = path0.getPointAtLength(t * n0),
          p1 = path1.getPointAtLength(t * n1);
      return d3.interpolate([p0.x, p0.y], [p1.x, p1.y]);
    });
 
    return function(t) {
      return t < 1 ? "M" + points.map(function(p) { return p(t); }).join("L") : d1;
    };
  };
}
