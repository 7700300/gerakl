    var _mCE;
    function start_move_element(e, id, frame) {
        var elem_id = (e.target || e.srcElement).id;
        if (id)
            elem_id = id;
        if (!frame)
            frame = window;
        if (frame.event)
            e = frame.event;
        _mCE = frame.document.getElementById(elem_id);
        _mCE.frame = frame;
        frame.document.onmousemove = move_element;
        frame.document.onmouseup = end_move_element;
        mouse_x = getMouseX(e);
        mouse_y = getMouseY(e);
        _mCE.start_pos_x = mouse_x - (_mCE.style.left.replace("px", "") || calculeOffsetLeft(_mCE));
        _mCE.start_pos_y = mouse_y - (_mCE.style.top.replace("px", "") || calculeOffsetTop(_mCE));
        return false;
    }
    ;function end_move_element(e) {
        _mCE.frame.document.onmousemove = "";
        _mCE.frame.document.onmouseup = "";
        _mCE = null;
    }
    ;function move_element(e) {
        var newTop, newLeft, maxLeft;
        if (_mCE.frame && _mCE.frame.event)
            e = _mCE.frame.event;
        newTop = getMouseY(e) - _mCE.start_pos_y;
        newLeft = getMouseX(e) - _mCE.start_pos_x;
        maxLeft = _mCE.frame.document.body.offsetWidth - _mCE.offsetWidth;
        max_top = _mCE.frame.document.body.offsetHeight - _mCE.offsetHeight;
        newTop = Math.min(Math.max(0, newTop), max_top);
        newLeft = Math.min(Math.max(0, newLeft), maxLeft);
        _mCE.style.top = newTop + "px";
        _mCE.style.left = newLeft + "px";
        return false;
    }
    function getMouseX(e) {
        if (e != null && typeof (e.pageX) != "undefined") {
            return e.pageX;
        } else {
            return (e != null ? e.x : event.x) + document.documentElement.scrollLeft;
        }
    }
    ;function getMouseY(e) {
        if (e != null && typeof (e.pageY) != "undefined") {
            return e.pageY;
        } else {
            return (e != null ? e.y : event.y) + document.documentElement.scrollTop;
        }
    }
    ;function calculeOffsetLeft(r) {
        return calculeOffset(r, "offsetLeft")
    }
    ;function calculeOffsetTop(r) {
        return calculeOffset(r, "offsetTop")
    }
    ;function calculeOffset(element, attr) {
        var offset = 0;
        while (element) {
            offset += element[attr];
            element = element.offsetParent
        }
        return offset;
    }