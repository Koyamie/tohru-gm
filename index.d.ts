/// <reference types="node" />

import { EventEmitter } from 'events';
import { Stream } from 'stream';

declare namespace gm {
    interface Options {
        [key: string]: any;
    }

    interface GMConstructor {
        new (source: string | Buffer | Stream, height?: string | number, color?: string): GMInstance;
        (source: string | Buffer | Stream, height?: string | number, color?: string): GMInstance;
        
        // For creating new images with dimensions
        new (width: number, height: number, color?: string): GMInstance;
        (width: number, height: number, color?: string): GMInstance;
        
        // For creating new images with dimensions object
        new (dimensions: { width: number; height: number }, color?: string): GMInstance;
        (dimensions: { width: number; height: number }, color?: string): GMInstance;

        subClass(options: Options): GMConstructor;
        
        // Static properties
        utils: any;
        compare: any;
        version: string;
    }

    interface GMInstance extends EventEmitter {
        _options: Options;
        data: any;
        source: string;
        sourceStream?: Stream;
        sourceBuffer?: Buffer;
        sourceFrames?: string;
        _in: string[];
        _out: string[];
        _outputFormat: string | null;
        _subCommand: string;

        // Core methods
        options(options: Options): this;
        in(...args: string[]): this;

        // These are placeholder method signatures
        // Additional method signatures from lib/ folders would be added here
        // For example:
        // drawing methods
        draw(...args: any[]): this;
        
        // convenience methods
        write(filename: string, callback: (err: Error | null, stdout: string, stderr: string, cmd: string) => void): this;
        
        // command methods
        command(command: string): this;
        
        // compare methods
        compare(other: string | GMInstance, callback: (err: Error | null, isEqual: boolean, difference: number, equality: number) => void): this;
        
        // composite methods
        composite(other: string | GMInstance): this;
        
        // montage methods
        montage(other: string | GMInstance): this;

        // Args methods from args.js
        selectFrame(frame: number): this;
        command(name: string): this;
        subCommand(name: string): this;
        adjoin(): this;
        affine(matrix: string): this;
        alpha(type: string): this;
        append(img?: string | string[] | Buffer | Stream, ltr?: boolean): this;
        authenticate(string: string): this;
        average(): this;
        backdrop(): this;
        blackThreshold(red: number, green?: number, blue?: number, opacity?: number): this;
        bluePrimary(x: number, y: number): this;
        border(width: number, height: number): this;
        borderColor(color: string): this;
        box(color: string): this;
        channel(type: string): this;
        chop(w: number, h: number, x?: number, y?: number): this;
        clip(): this;
        coalesce(): this;
        colorize(r: number, g: number, b: number): this;
        tint(r: number, g: number, b: number): this;
        colorMap(type: string): this;
        compose(operator: string): this;
        compress(type: string): this;
        convolve(kernel: string): this;
        createDirectories(): this;
        deconstruct(): this;
        define(value: string): this;
        delay(value: number): this;
        density(w: number, h?: number): this;
        despeckle(): this;
        displace(horizontalScale: number, verticalScale: number): this;
        display(value: string): this;
        dispose(method: string): this;
        dissolve(percent: number): this;
        encoding(type: string): this;
        endian(type: string): this;
        file(filename: string): this;
        flatten(): this;
        foreground(color: string): this;
        frame(width?: number, height?: number, outerBevelWidth?: number, innerBevelWidth?: number): this;
        fuzz(distance: number, percent?: boolean): this;
        gaussian(radius: number, sigma?: number): this;
        geometry(width: number | string, height?: number, arg?: string): this;
        greenPrimary(x: number, y: number): this;
        highlightColor(color: string): this;
        highlightStyle(style: string): this;
        iconGeometry(geometry: string): this;
        intent(type: string): this;
        lat(width: number, height: number, offset: number, percent?: boolean): this;
        level(blackPoint: number, gamma: number, whitePoint: number, percent?: boolean): this;
        list(type: string): this;
        log(string: string): this;
        loop(iterations: number): this;
        map(filename: string): this;
        mask(filename: string): this;
        matte(): this;
        matteColor(color: string): this;
        maximumError(limit: number): this;
        mode(value: string): this;
        monitor(): this;
        mosaic(): this;
        motionBlur(radius: number, sigma?: number, angle?: number): this;
        name(): this;
        noop(): this;
        normalize(): this;
        opaque(color: string): this;
        operator(channel: string, operator: string, rvalue: number, percent?: boolean): this;
        orderedDither(channeltype: string, NxN: string): this;
        outputDirectory(directory: string): this;
        page(width: number, height: number, arg?: string): this;
        pause(seconds: number): this;
        pen(color: string): this;
        ping(): this;
        pointSize(value: number): this;
        preview(type: string): this;
        process(command: string): this;
        profile(filename: string): this;
        progress(): this;
        randomThreshold(channeltype: string, LOWxHIGH: string): this;
        recolor(matrix: string): this;
        redPrimary(x: number, y: number): this;
        remote(): this;
        render(): this;
        repage(width: number, height: number, xoff: number, yoff: number, arg?: string): this;
        sample(geometry: string): this;
        samplingFactor(horizontalFactor: number, verticalFactor: number): this;
        scale(w?: number, h?: number, options?: string): this;
        scene(value: number): this;
        scenes(start: number, end: number): this;
        screen(): this;
        set(attribute: string, value: string): this;
        segment(clusterThreshold: number, smoothingThreshold: number): this;
        shade(azimuth: number, elevation: number): this;
        shadow(radius: number, sigma?: number): this;
        sharedMemory(): this;
        shave(width: number, height: number, percent?: boolean): this;
        shear(xDegrees: number, yDegrees: number): this;
        silent(): this;
        rawSize(width: number, height: number, offset?: number): this;
        snaps(value: number): this;
        stegano(offset: number): this;
        stereo(): this;
        textFont(name: string): this;
        texture(filename: string): this;
        threshold(value: number, percent?: boolean): this;
        thumbnail(w?: number, h?: number, options?: string): this;
        tile(filename: string): this;
        title(string: string): this;
        transform(color: string): this;
        transparent(color: string): this;
        treeDepth(value: number): this;
        update(seconds: number): this;
        units(type: string): this;
        unsharp(radius: number, sigma?: number, amount?: number, threshold?: number): this;
        usePixmap(): this;
        view(string: string): this;
        virtualPixel(method: string): this;
        visual(type: string): this;
        watermark(brightness: number, saturation: number): this;
        wave(amplitude: number, wavelength: number): this;
        whitePoint(x: number, y: number): this;
        whiteThreshold(red: number, green?: number, blue?: number, opacity?: number): this;
        window(id: string): this;
        windowGroup(): this;
        strip(): this;
        interlace(type?: string): this;
        setFormat(format: string): this;
        resize(w?: number, h?: number, options?: string): this;
        resizeExact(w: number, h: number): this;
        filter(val: string): this;
        noProfile(): this;
        resample(w: number, h: number): this;
        rotate(color: string, deg?: number): this;
        flip(): this;
        flop(): this;
        crop(w: number, h: number, x?: number, y?: number, percent?: boolean): this;
        magnify(): this;
        minify(): this;
        quality(val?: number): this;
        blur(radius: number, sigma?: number): this;
        charcoal(factor?: number): this;
        modulate(b: number, s: number, h: number): this;
        antialias(disable?: boolean): this;
        bitdepth(val: number): this;
        colors(val?: number): this;
        colorspace(val: string): this;
        comment(format: string): this;
        contrast(mult?: number): this;
        cycle(amount?: number): this;
        depth(val: number): this;
        dither(on?: boolean): this;
        monochrome(): this;
        edge(radius?: number): this;
        emboss(radius?: number): this;
        enhance(): this;
        equalize(): this;
        gamma(r: number, g: number, b: number): this;
        implode(factor?: number): this;
        label(format: string): this;
        limit(type: string, val: number): this;
        median(radius?: number): this;
        negative(grayscale?: boolean): this;
        noise(radius: string | number): this;
        paint(radius: number): this;
        raise(w?: number, h?: number): this;
        lower(w?: number, h?: number): this;
        region(w?: number, h?: number, x?: number, y?: number): this;
        roll(x: number, y: number): this;
        sharpen(radius: number, sigma?: number): this;
        solarize(factor?: number): this;
        spread(amount?: number): this;
        swirl(degrees?: number): this;
        type(type: string): this;
        trim(): this;
        extent(w?: number, h?: number, options?: string): this;
        gravity(type?: GravityType): this;
        flatten(): this;
        background(color: string): this;
    }

    type GravityType = 'NorthWest' | 'North' | 'NorthEast' | 'West' | 'Center' | 'East' | 'SouthWest' | 'South' | 'SouthEast';
}

declare const gm: gm.GMConstructor;

export = gm;
