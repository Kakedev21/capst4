import React from "react";

const Terms = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Waiver <br /> terms and conditions
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <h2>
            As of:
            {new Date().toLocaleString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </h2>
          <h3 style={{ color: "red" }} className="m-10">
            Please read and be certain you understand the inmplications of
            signing. Participant understands signed waiver is valid for any
            Hiking Tour for our current season.
          </h3>
          <h3 className="mt-6">
            <span className="font-bold">
              {" "}
              Participant understands signed waiver is valid for any Hiking Tour
              for our current season.
            </span>
            <br></br>I Agree
          </h3>
          <h3 className="mt-6">
            <span className="font-bold">
              {" "}
              <br></br> Photo Release Agreement
            </span>
            I hereby grant the Keweenaw Adventure Company permission to use my
            likeness in a photograph, video, or other digital media (photo) in
            any and all of its publications, including web-based publications,
            without payment or other consideration. (NOTE: If you do NOT agree
            please speak with shop representative to confirm your likeness is
            not used in media, and meanwhile click "Agree to proceed and
            complete waiver.) <br></br> I Agree
          </h3>
          <h3 className="mt-10">
            <span className="mb-6 font-bold">
              {" "}
              Assumption of Risk associated with Hiking activities:
            </span>{" "}
            <br />I do hereby affirm and acknowledge that I have been fully
            informed of the inherent hazards and risks associated with hiking.
            1. Risk of injury from the activity and equipment utilized is
            significant, including the potential for permanent disability or
            death. 2. Falling, causing broken bones, severe injury to the head,
            neck and back which may result in severe impairment or even death.
            3. An "act of nature", including but not limited to rock fall,
            inclement weather, thunder and lightning, severe or varied wind,
            temperature and other weather conditions. 4. Risks associated with
            crossing, climbing or down-climbing rock. 5. Risks associated with
            river crossings, fordings or portaging 6. Possible equipment failure
            and/or malfunction of my own or others' equipment. 7. My own
            negligence and/or the negligence of others, including employees,
            agents, independent contractors or representatives of Keweenaw
            Adventure LLC, including but not limited to operator error. 8. Cold
            weather and heat-related injuries and illness including but not
            limited to frostnip, frost bite, hypothermia, heat exhaustion, heat
            stroke, sunburn and dehydration. 9. Exposure to outdoor elements,
            including but not limited to inclement weather, thunder and
            lighting, severe and/or varied wind, temperature or weather
            conditions. 10. Attack by or encounter with insects, animals and/or
            wildlife. PLEASE NOTE: If participant(s) use an INHALER and/or
            require EPINEPHRINE (EpiPen), they are responsible for bringing
            their medication for self-administration during the entire tour
            duration. Keweenaw Adventure LLC DOES NOT provide INHALER or
            EPINEPHRINE (EpiPen) medications. 11. Accidents or illness occurring
            in remote places where there are no available medical facilities and
            rescue may be distant and time-consuming at best. 12. Fatigue chill
            and/or dizziness, which may diminish my/our reaction time and
            increase the risk of accident. 13. My sense of balance, physical
            coordination, and ability to follow instructions. 14. Participation
            in this activity(s) may include possible exposure to and illness
            from COVID-19. While Company safety protocols and personal
            discipline may reduce this risk, the risk of serious illness or even
            death does exist. *I understand the description of these risks is
            not complete and that unknown or unanticipated risks may result in
            injury, illness, or death.
          </h3>
          <p style={{ color: "Red", marginTop: "25px" }}>
            *I understand the description of these risks is not complete and
            that unknown or unanticipated risks may result in injury, illness,
            or death.{" "}
          </p>
          <h2 className="mt-10 font-bold">
            Release of Liability, Waiver of Claims and Indemnity Agreement:
          </h2>
          <h3>
            In consideration for being permitted to participate in hiking
            activities I hereby agree, acknowledge and appreciate that: 1. I
            HEREBY RELEASE AND HOLD HARMLESS WITH RESPECT TO ANY AND ALL INJURY,
            DISABILITY, DEATH, or loss or damage to person or property, WHETHER
            CAUSED BY NEGLIGENCE OR OTHERWISE, the following named persons or
            entities, herein referred to as releasees: Keweenaw Adventure LLC 2.
            To release the releasees, their officers, directors, employees,
            representatives, agents and volunteers from liability and
            responsibility whatsoever and for any claims or causes of action
            that L, my estate, heirs, Survivors, executors, or assigns may have
            for personal injury, property damage, or wrongful death arising from
            the above activities whether caused by acti negligence of the
            releases or otherwise. By executing this document, I agree to hold
            the releases harmless and indemnify them in conjunction with any
            injury, disability, death or loss or damage to person or property
            that may occur as a result of engaging in the above activities. or
            passive 3. By entering into the Agreement, I am not relying on any
            oral or written representation or statements made by the releasees,
            other then what is set forth in this Agreement.
          </h3>
          <h3 className="mt-6 p-10">
            This release shall be binding to the fullest extent permitted by
            law. If any provision of this release is found to be unenforceable,
            the remaining terms shall be enforceable.
          </h3>
          <h2 className="font-bold">Declaration of Fitness Agreement: </h2>
          <h3>
            Furthermore, I hereby declare that I will not participate in this
            activity if I have any COVID-19 symptoms, that I'm physically fit
            and have no physical or mental condition(s) that should preclude me
            from participating in my chosen activity, that I am not
            participating against medical advice or treatment and that I have
            not been diagnosed by a registered doctor as having a terminal
            illness. I further declare that in the event that I feel ill or
            unwell, have any physical complaints whatsoever or if an injury is
            sustained of any kind during the course of hiking activities, I will
            notify the guide immediately and before moving away from the
            immediate vicinity.
          </h3>
          <h2 style={{ color: "red", marginTop: "25px" }}>
            *I HAVE READ THE ASSUMPTION OF RISK /RELEASE OF LIABILITY, WAIVER OF
            CLAIMS AND INDEMNITY AGREEMENT/ DECLARATION OF FITNESS AGREEMENT,
            AND I FULLY UNDERSTAND ITS TERMS, AND UNDERSTAND THAT I HAVE GIVEN
            UP LEGAL RIGHTS BY SIGNING IT, ANDI SIGN IT FREELY AND VOLUNTARILY
            WITHOUT ANY INDUCEMENT.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Terms;
