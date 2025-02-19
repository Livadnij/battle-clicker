import React, { FC, useMemo } from 'react';
import { ScoreType } from "../../../types/types";

type LogContainerSvgProps = {
    score: ScoreType;
    className: string;
}
const LogContainerSvg: FC<LogContainerSvgProps> = (
    {
        score,
        className
    }
) => {

    const userScore = useMemo(() => {
        return score.userScore
    }, [score])

    const botScore = useMemo(() => {
        return score.botScore
    }, [score])

    return (
        <svg className={className} width="346" height="395" viewBox="0 0 346 395" fill="none" xmlns="http://www.w3.org/2000/svg">
            <foreignObject x="-3" y="95" width="353" height="303.5">
                <div
                    style={{
                        backdropFilter: 'blur(2px)',
                        clipPath: 'url(#bgblur_0_101_162_clip_path)',
                        height: '100%',
                        width: '100%'
                    }}></div>
            </foreignObject>
            <g data-figma-bg-blur-radius="4">
                <rect x="1" y="99" width="345" height="295.5" fill="black" fill-opacity="0.2"/>
                <rect x="1.5" y="99.5" width="344" height="294.5" stroke="#4BFFF6" stroke-opacity="0.5"/>
            </g>
            <foreignObject x="-3" y="-3" width="353" height="114">
                <div
                    style={{
                        backdropFilter: 'blur(2px)',
                        clipPath: 'url(#bgblur_1_101_162_clip_path)',
                        height: '100%',
                        width: '100%'
                    }}></div>
            </foreignObject>
            <path data-figma-bg-blur-radius="4" d="M1 1H346V107H1V1Z" fill="white" fill-opacity="0.07"/>
            <foreignObject x="69.5" y="-9.5" width="209" height="45">
                <div
                    style={{
                        backdropFilter: 'blur(5px)',
                        clipPath: 'url(#bgblur_2_101_162_clip_path)',
                        height: '100%',
                        width: '100%'
                    }}></div>
            </foreignObject>
            <g data-figma-bg-blur-radius="10">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M156.686 1L80 1.176V21.0601L86.6542 25H89.1707V24H91.4634V25H94.9024V24H96.0488V25H97.1951V24H106.366V25H107.512V24H110.951V25H261.363V24.805L261.506 24.8977L268 21.0601V1.176L191.314 1L185.288 5.52776H162.712L156.686 1Z"
                      fill="#FFFB00" fill-opacity="0.6"/>
                <path
                    d="M80 1.176L79.9989 0.675997L79.5 0.677141V1.176H80ZM156.686 1L156.986 0.600256L156.852 0.499617L156.685 0.500001L156.686 1ZM80 21.0601H79.5V21.3451L79.7453 21.4903L80 21.0601ZM86.6542 25L86.3995 25.4302L86.5173 25.5H86.6542V25ZM89.1707 25V25.5H89.6707V25H89.1707ZM89.1707 24V23.5H88.6707V24H89.1707ZM91.4634 24H91.9634V23.5H91.4634V24ZM91.4634 25H90.9634V25.5H91.4634V25ZM94.9024 25V25.5H95.4024V25H94.9024ZM94.9024 24V23.5H94.4024V24H94.9024ZM96.0488 24H96.5488V23.5H96.0488V24ZM96.0488 25H95.5488V25.5H96.0488V25ZM97.1951 25V25.5H97.6951V25H97.1951ZM97.1951 24V23.5H96.6951V24H97.1951ZM106.366 24H106.866V23.5H106.366V24ZM106.366 25H105.866V25.5H106.366V25ZM107.512 25V25.5H108.012V25H107.512ZM107.512 24V23.5H107.012V24H107.512ZM110.951 24H111.451V23.5H110.951V24ZM110.951 25H110.451V25.5H110.951V25ZM261.363 25V25.5H261.863V25H261.363ZM261.363 24.805L261.635 24.3854L260.863 23.8853V24.805H261.363ZM261.506 24.8977L261.235 25.3174L261.494 25.4857L261.761 25.3282L261.506 24.8977ZM268 21.0601L268.254 21.4905L268.5 21.3454V21.0601H268ZM268 1.176H268.5V0.677141L268.001 0.675997L268 1.176ZM191.314 1L191.315 0.500001L191.148 0.499617L191.014 0.600256L191.314 1ZM185.288 5.52776V6.02776H185.455L185.588 5.9275L185.288 5.52776ZM162.712 5.52776L162.412 5.9275L162.545 6.02776H162.712V5.52776ZM80.0011 1.67599L156.687 1.5L156.685 0.500001L79.9989 0.675997L80.0011 1.67599ZM80.5 21.0601V1.176H79.5V21.0601H80.5ZM86.909 24.5698L80.2547 20.6299L79.7453 21.4903L86.3995 25.4302L86.909 24.5698ZM89.1707 24.5H86.6542V25.5H89.1707V24.5ZM88.6707 24V25H89.6707V24H88.6707ZM91.4634 23.5H89.1707V24.5H91.4634V23.5ZM91.9634 25V24H90.9634V25H91.9634ZM94.9024 24.5H91.4634V25.5H94.9024V24.5ZM94.4024 24V25H95.4024V24H94.4024ZM96.0488 23.5H94.9024V24.5H96.0488V23.5ZM96.5488 25V24H95.5488V25H96.5488ZM97.1951 24.5H96.0488V25.5H97.1951V24.5ZM96.6951 24V25H97.6951V24H96.6951ZM106.366 23.5H97.1951V24.5H106.366V23.5ZM106.866 25V24H105.866V25H106.866ZM107.512 24.5H106.366V25.5H107.512V24.5ZM107.012 24V25H108.012V24H107.012ZM110.951 23.5H107.512V24.5H110.951V23.5ZM111.451 25V24H110.451V25H111.451ZM261.363 24.5H110.951V25.5H261.363V24.5ZM260.863 24.805V25H261.863V24.805H260.863ZM261.778 24.4781L261.635 24.3854L261.091 25.2246L261.235 25.3174L261.778 24.4781ZM267.746 20.6297L261.252 24.4673L261.761 25.3282L268.254 21.4905L267.746 20.6297ZM267.5 1.176V21.0601H268.5V1.176H267.5ZM191.313 1.5L267.999 1.67599L268.001 0.675997L191.315 0.500001L191.313 1.5ZM185.588 5.9275L191.615 1.39974L191.014 0.600256L184.988 5.12802L185.588 5.9275ZM162.712 6.02776H185.288V5.02776H162.712V6.02776ZM156.385 1.39974L162.412 5.9275L163.012 5.12802L156.986 0.600256L156.385 1.39974Z"
                    fill="#FFFB00"/>
            </g>
            <path d="M164 2H184" stroke="#FFFB00" stroke-width="2"/>
            <path d="M167 4H181" stroke="#FFFB00" stroke-width="2"/>
            <path d="M1.5 70V38" stroke="#FFFB00"/>
            <path d="M1.5 97V90" stroke="#FFFB00"/>
            <path d="M1.5 102.5V95.5" stroke="#FFFB00" stroke-opacity="0.2"/>
            <path d="M1.5 110.5V103.5" stroke="#FFFB00" stroke-opacity="0.8"/>
            <path d="M345.5 60V28" stroke="#FFFB00"/>
            <path d="M1.5 19V7" stroke="#FFFB00"/>
            <path d="M1.5 53V1" stroke="#FFFB00" stroke-opacity="0.4"/>
            <path d="M345.5 53V1" stroke="#FFFB00" stroke-opacity="0.4"/>
            <path d="M1.40039 27V23" stroke="#FFFB00"/>
            <path d="M326.5 1.5H346" stroke="#FFFB00"/>
            <path d="M1.5 1.5H21.5" stroke="#FFFB00"/>
            <path d="M253 1.5H272.5" stroke="#FFFB00"/>
            <path d="M213 2H232.5" stroke="#FFFB00"/>
            <path d="M69.5 1.5H89.5" stroke="#FFFB00" stroke-opacity="0.2"/>
            <path d="M66.5 1.5H72" stroke="#FFFB00" stroke-opacity="0.4"/>
            <foreignObject x="-1.29102" y="89" width="121.291" height="23">
                <div
                    style={{
                        backdropFilter: 'blur(2px)',
                        clipPath: 'url(#bgblur_3_101_162_clip_path)',
                        height: '100%',
                        width: '100%'
                    }}></div>
            </foreignObject>
            <path data-figma-bg-blur-radius="4" d="M108 93L116 108H2.70919L2.70898 93H108Z" fill="#4BFFF6"
                  fill-opacity="0.11"/>
            <foreignObject x="227" y="89" width="121.291" height="23">
                <div
                    style={{
                        backdropFilter: 'blur(2px)',
                        clipPath: 'url(#bgblur_4_101_162_clip_path)',
                        height: '100%',
                        width: '100%'
                    }}></div>
            </foreignObject>
            <path data-figma-bg-blur-radius="4" d="M239 93L231 108H344.291L344.291 93H239Z" fill="#4BFFF6"
                  fill-opacity="0.11"/>
            <path d="M2 109H346" stroke="#FFFB00"/>
            <foreignObject x="97.1621" y="80.5" width="151.673" height="39">
                <div
                    style={{
                        backdropFilter: 'blur(5px)',
                        clipPath: 'url(#bgblur_5_101_162_clip_path)',
                        height: '100%',
                        width: '100%'
                    }}></div>
            </foreignObject>
            <g data-figma-bg-blur-radius="10">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M159.686 91L108 91.176L117.654 109H226.363L222 108.805L228.506 108.898L238 91.176H187L182 94.5278H164.712L159.686 91Z"
                      fill="#FFFB00" fill-opacity="0.6"/>
                <path
                    d="M108 91.176L107.998 90.676L107.162 90.6788L107.56 91.4141L108 91.176ZM159.686 91L159.973 90.5907L159.843 90.4995L159.684 90.5L159.686 91ZM117.654 109L117.215 109.238L117.356 109.5H117.654V109ZM226.363 109V109.5L226.386 108.5L226.363 109ZM222 108.805L222.007 108.305L221.978 109.304L222 108.805ZM228.506 108.898L228.499 109.398L228.804 109.402L228.947 109.134L228.506 108.898ZM238 91.176L238.441 91.4121L238.835 90.676H238V91.176ZM187 91.176V90.676H186.848L186.722 90.7607L187 91.176ZM182 94.5278V95.0278H182.152L182.278 94.9431L182 94.5278ZM164.712 94.5278L164.425 94.937L164.554 95.0278H164.712V94.5278ZM108.002 91.676L159.687 91.5L159.684 90.5L107.998 90.676L108.002 91.676ZM118.094 108.762L108.44 90.9379L107.56 91.4141L117.215 109.238L118.094 108.762ZM226.363 108.5H117.654V109.5H226.363V108.5ZM221.978 109.304L226.341 109.5L226.386 108.5L222.022 108.305L221.978 109.304ZM228.514 108.398L222.007 108.305L221.993 109.305L228.499 109.398L228.514 108.398ZM237.559 90.9399L228.066 108.662L228.947 109.134L238.441 91.4121L237.559 90.9399ZM187 91.676H238V90.676H187V91.676ZM182.278 94.9431L187.278 91.5913L186.722 90.7607L181.722 94.1124L182.278 94.9431ZM164.712 95.0278H182V94.0278H164.712V95.0278ZM159.399 91.4093L164.425 94.937L164.999 94.1185L159.973 90.5907L159.399 91.4093Z"
                    fill="#FFFB00"/>
            </g>
            <path d="M236.5 92H345" stroke="#FFFB00"/>
            <path d="M2 92H110.5" stroke="#FFFB00"/>
            <path d="M345.4 79V75" stroke="#FFFB00"/>
            <path d="M345.5 108L345.5 83" stroke="#FFFB00" stroke-opacity="0.5"/>
            <path d="M5 96H35L41 106H5V96Z" fill="#4BFFF6" fill-opacity={userScore >= 1 ? '1' : '0.4'}/>
            <path d="M38 96H70L76 106H44L38 96Z" fill="#4BFFF6" fill-opacity={userScore >= 2 ? '1' : '0.4'}/>
            <path d="M73 96H105L111 106H79L73 96Z" fill="#4BFFF6" fill-opacity={userScore >= 3 ? '1' : '0.4'}/>
            <path d="M342 96H312L306 106H342V96Z" fill="#4BFFF6" fill-opacity={botScore >= 1 ? '1' : '0.4'}/>
            <path d="M309 96H277L271 106H303L309 96Z" fill="#4BFFF6" fill-opacity={botScore >= 2 ? '1' : '0.4'}/>
            <path d="M274 96H242L236 106H268L274 96Z" fill="#4BFFF6" fill-opacity={botScore >= 3 ? '1' : '0.4'}/>
            <defs>
                <clipPath id="bgblur_0_101_162_clip_path">
                    <rect transform="translate(3 -95)" x="1" y="99" width="345" height="295.5"/>
                </clipPath>
                <clipPath id="bgblur_1_101_162_clip_path">
                    <path transform="translate(3 3)" d="M1 1H346V107H1V1Z"/>
                </clipPath>
                <clipPath id="bgblur_2_101_162_clip_path">
                    <path transform="translate(-69.5 9.5)" fill-rule="evenodd" clip-rule="evenodd"
                          d="M156.686 1L80 1.176V21.0601L86.6542 25H89.1707V24H91.4634V25H94.9024V24H96.0488V25H97.1951V24H106.366V25H107.512V24H110.951V25H261.363V24.805L261.506 24.8977L268 21.0601V1.176L191.314 1L185.288 5.52776H162.712L156.686 1Z"/>
                </clipPath>
                <clipPath id="bgblur_3_101_162_clip_path">
                    <path transform="translate(1.29102 -89)" d="M108 93L116 108H2.70919L2.70898 93H108Z"/>
                </clipPath>
                <clipPath id="bgblur_4_101_162_clip_path">
                    <path transform="translate(-227 -89)" d="M239 93L231 108H344.291L344.291 93H239Z"/>
                </clipPath>
                <clipPath id="bgblur_5_101_162_clip_path">
                    <path transform="translate(-97.1621 -80.5)" fill-rule="evenodd" clip-rule="evenodd"
                          d="M159.686 91L108 91.176L117.654 109H226.363L222 108.805L228.506 108.898L238 91.176H187L182 94.5278H164.712L159.686 91Z"/>
                </clipPath>
            </defs>
        </svg>
    );
};

export default LogContainerSvg;