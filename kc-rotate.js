/*KAISARCODE ROTATE *********************************************************
*                                                                           *
*    Copyright (C) 2006 - 2015  KaisarCode.com                              *
*                                                                           *
*    This program is free software: you can redistribute it and/or modify   *
*    it under the terms of the GNU Lesser General Public License as         *
*    published by the Free Software Foundation, either version 3 of the     *
*    License, or (at your option) any later version.                        *
*                                                                           *
*    This program is distributed in the hope that it will be useful,        *
*    but WITHOUT ANY WARRANTY; without even the implied warranty of         *
*    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the          *
*    GNU Lesser General Public License for more details.                    *
*                                                                           *
*    You should have received a copy of the GNU General Public License      *
*    along with this program.  If not, see <http://www.gnu.org/licenses/>.  *
*                                                                           *
*****************************************************************************/

function kcRotate(elem,deg){
	
    var Dx;
    var Dy;
    var iecos;
    var iesin;
    var halfWidth;
    var halfHeight;
    var dummy;
      
    //degrees to radians
    var rad = deg*(Math.PI / 180);
     
    //get sine and cosine of rotation angle
    iecos = Math.cos(rad);
    iesin = Math.sin(rad);
    
    //get element's size
    halfWidth = elem.offsetWidth / 2;
    halfHeight = elem.offsetHeight / 2;
     
    //calculating position correction values
    Dx = -halfWidth*iecos + halfHeight*iesin + halfWidth;
    Dy = -halfWidth*iesin - halfHeight*iecos + halfHeight;
    
    //applying CSS3 rotation
    elem.style.transform = "rotate("+ rad +"rad)";
    
    //vendor prefixed rotations
    elem.style.mozTransform = "rotate("+ rad +"rad)";
    elem.style.webkitTransform = "rotate("+ rad +"rad)";
    elem.style.OTransform = "rotate("+ rad +"rad)";
    elem.style.msTransform = "rotate("+ rad +"rad)";
    
    //rotation Matrix for IExplorer
    elem.style.filter = "progid:DXImageTransform.Microsoft.Matrix(M11 = "+ iecos +", M12 = "+ -iesin +", M21 = "+ iesin +", M22 = "+ iecos +", Dx = "+ Dx +", Dy = "+ Dy +", SizingMethod = auto expand)";
    elem.style.msFilter = "progid:DXImageTransform.Microsoft.Matrix(M11 = "+ iecos +", M12 = "+ -iesin +", M21 = "+ iesin +", M22 = "+ iecos +", Dx = "+ Dx +", Dy = "+ Dy +", SizingMethod = auto expand)";
    
    //Fixing black box issue on IE9
    dummy = document.createElement("div");
    dummy.innerHTML = '<!--[if gte IE 9]><br /><![endif]-->';
    if(dummy.getElementsByTagName("br").length == 1) elem.style.filter = "none";
    delete dummy;
}
