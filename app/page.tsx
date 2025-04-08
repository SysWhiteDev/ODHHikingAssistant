"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Bot, Loader, Send } from "lucide-react";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

type Hike = {
  _Meta?: {
    Id?: string;
    Type?: string;
    LastUpdate?: string;
    Source?: string;
    Reduced?: boolean;
    UpdateInfo?: {
      UpdatedBy?: string;
      UpdateSource?: string;
      UpdateHistory?: {
        LastUpdate?: string;
        UpdateSource?: string;
        UpdatedBy?: string;
      }[];
    };
  };
  Self?: string;
  OdhActive?: boolean;
  ODHTags?: {
    Id?: string;
    Self?: string;
  }[];
  ODHActivityPoiTypes?: {
    Id?: string;
    Self?: string;
    Type?: string;
  }[];
  Areas?: {
    Id?: string;
    Self?: string;
  }[];
  CategoryCodes?: {
    Self?: string;
    Id?: string;
    Shortname?: string;
  }[];
  DishRates?: {
    Self?: string;
    Id?: string;
    Shortname?: string;
    MinAmount?: number;
    MaxAmount?: number;
    CurrencyCode?: string;
  }[];
  CapacityCeremony?: {
    Self?: string;
    Id?: string;
    Shortname?: string;
    MaxSeatingCapacity?: number;
  }[];
  Facilities?: {
    Self?: string;
    Id?: string;
    Shortname?: string;
  }[];
  LocationInfo?: {
    RegionInfo?: {
      Self?: string;
      Id?: string;
      Name?: Record<string, string>;
    };
    TvInfo?: {
      Self?: string;
      Id?: string;
      Name?: Record<string, string>;
    };
    MunicipalityInfo?: {
      Self?: string;
      Id?: string;
      Name?: Record<string, string>;
    };
    DistrictInfo?: {
      Self?: string;
      Id?: string;
      Name?: Record<string, string>;
    };
    AreaInfo?: {
      Self?: string;
      Id?: string;
      Name?: Record<string, string>;
    };
  };
  LTSTags?: {
    Self?: string;
    Id?: string;
    Level?: number;
    LTSRID?: string;
    TagName?: Record<string, string>;
    LTSTins?: {
      Id?: string;
      LTSRID?: string;
      TinName?: Record<string, string>;
    }[];
  }[];
  TagIds?: string[];
  PoiProperty?: Record<string, { Name?: string; Value?: string }[]>;
  AgeFrom?: number;
  AgeTo?: number;
  MaxSeatingCapacity?: number;
  RelatedContent?: {
    Id?: string;
    Type?: string;
    Self?: string;
  }[];
  AdditionalContact?: Record<
    string,
    {
      Type?: string;
      ContactInfos?: {
        Address?: string;
        Region?: string;
        RegionCode?: string;
        Area?: string;
        City?: string;
        ZipCode?: string;
        CountryCode?: string;
        CountryName?: string;
        Surname?: string;
        Givenname?: string;
        NamePrefix?: string;
        Email?: string;
        Phonenumber?: string;
        Faxnumber?: string;
        Url?: string;
        Language?: string;
        CompanyName?: string;
        Vat?: string;
        Tax?: string;
        LogoUrl?: string;
      };
      Description?: string;
    }[]
  >;
  AdditionalProperties?: Record<string, string>;
  LicenseInfo?: {
    License?: string;
    LicenseHolder?: string;
    Author?: string;
    ClosedData?: boolean;
  };
  Id?: string;
  CopyrightChecked?: boolean;
  Active?: boolean;
  Shortname?: string;
  FirstImport?: string;
  LastChange?: string;
  TourismorganizationId?: string;
  AreaIds?: string[];
  AltitudeDifference?: number;
  AltitudeHighestPoint?: number;
  AltitudeLowestPoint?: number;
  AltitudeSumUp?: number;
  AltitudeSumDown?: number;
  DistanceDuration?: number;
  DistanceLength?: number;
  Highlight?: boolean;
  IsOpen?: boolean;
  IsPrepared?: boolean;
  RunToValley?: boolean;
  IsWithLigth?: boolean;
  HasRentals?: boolean;
  HasFreeEntrance?: boolean;
  LiftAvailable?: boolean;
  FeetClimb?: boolean;
  BikeTransport?: boolean;
  OperationSchedule?: {
    OperationscheduleName?: Record<string, string>;
    Start?: string;
    Stop?: string;
    Type?: string;
    OperationScheduleTime?: {
      Start?: string;
      End?: string;
      Monday?: boolean;
      Tuesday?: boolean;
      Wednesday?: boolean;
      Thursday?: boolean;
      Friday?: boolean;
      Saturday?: boolean;
      Sunday?: boolean;
      State?: number;
      Timecode?: number;
    }[];
  }[];
  GpsInfo?: {
    Gpstype?: string;
    Latitude?: number;
    Longitude?: number;
    Altitude?: number;
    AltitudeUnitofMeasure?: string;
  }[];
  GpsTrack?: {
    Id?: string;
    GpxTrackDesc?: Record<string, string>;
    GpxTrackUrl?: string;
    Type?: string;
    Format?: string;
  }[];
  ImageGallery?: {
    ImageName?: string;
    ImageUrl?: string;
    Width?: number;
    Height?: number;
    ImageSource?: string;
    ImageTitle?: Record<string, string>;
    ImageDesc?: Record<string, string>;
    ImageAltText?: Record<string, string>;
    IsInGallery?: boolean;
    ListPosition?: number;
    ValidFrom?: string;
    ValidTo?: string;
    CopyRight?: string;
    License?: string;
    LicenseHolder?: string;
    ImageTags?: string[];
  }[];
  Detail?: Record<
    string,
    {
      Header?: string;
      SubHeader?: string;
      IntroText?: string;
      BaseText?: string;
      Title?: string;
      AdditionalText?: string;
      MetaTitle?: string;
      MetaDesc?: string;
      GetThereText?: string;
      Language?: string;
      Keywords?: string[];
      ParkingInfo?: string;
      PublicTransportationInfo?: string;
      AuthorTip?: string;
      SafetyInfo?: string;
      EquipmentInfo?: string;
    }
  >;
  ContactInfos?: Record<
    string,
    {
      Address?: string;
      Region?: string;
      RegionCode?: string;
      Area?: string;
      City?: string;
      ZipCode?: string;
      CountryCode?: string;
      CountryName?: string;
      Surname?: string;
      Givenname?: string;
      NamePrefix?: string;
      Email?: string;
      Phonenumber?: string;
      Faxnumber?: string;
      Url?: string;
      Language?: string;
      CompanyName?: string;
      Vat?: string;
      Tax?: string;
      LogoUrl?: string;
    }
  >;
  AdditionalPoiInfos?: Record<
    string,
    {
      Novelty?: string;
      Language?: string;
      Categories?: string[];
    }
  >;
  SmgTags?: string[];
  HasLanguage?: string[];
  Ratings?: {
    Stamina?: string;
    Experience?: string;
    Landscape?: string;
    Difficulty?: string;
    Technique?: string;
  };
  Exposition?: string[];
  OwnerRid?: string;
  ChildPoiIds?: string[];
  MasterPoiIds?: string[];
  WayNumber?: number;
  Number?: string;
  PublishedOn?: string[];
  Source?: string;
  Mapping?: Record<string, Record<string, string>>;
  DistanceInfo?: {
    DistanceToMunicipality?: number;
    DistanceToDistrict?: number;
  };
  Tags?: {
    Id?: string;
    Source?: string;
    Self?: string;
    Type?: string;
    Name?: string;
  }[];
  VideoItems?: Record<
    string,
    {
      Name?: string;
      Url?: string;
      VideoSource?: string;
      VideoType?: string;
      StreamingSource?: string;
      VideoTitle?: string;
      VideoDesc?: string;
      Active?: boolean;
      CopyRight?: string;
      License?: string;
      LicenseHolder?: string;
      Language?: string;
      Width?: number;
      Height?: number;
      Definition?: string;
      Duration?: number;
      Resolution?: number;
      Bitrate?: number;
    }[]
  >;
};

export default function Home() {
  const [data, setData] = useState<Hike[]>([]);
  const [loading, setLoading] = useState(false);
  const [botResponse, setBotResponse] = useState("");
  const [parent] = useAutoAnimate();


  const attemptFetchHikes = async () => {
    let totalPages = 1;
    let allData: Hike[] = [];
    const res = await (await fetch(`https://tourism.opendatahub.com/v1/ODHActivityPoi?language=en&pagenumber=1&type=255&source=idm&active=false&tagfilter=hiking&fields=Type&fields=Detail&fields=GpsInfo&fields=Ratings&fields=Shortname&fields=ImageGallery&fields=IsWithLigth&fields=LocationInfo&fields=DistanceLength&fields=HasFreeEntrance&removenullvalues=true&getasidarray=false`)).json();
    allData = res.Items || [];
    totalPages = res.TotalPages;
    for (let i = 2; i <= totalPages; i++) {
      const res = await (await fetch(`https://tourism.opendatahub.com/v1/ODHActivityPoi?language=en&pagenumber=${i}&type=255&source=idm&active=false&tagfilter=hiking&fields=Type&fields=Detail&fields=GpsInfo&fields=Ratings&fields=Shortname&fields=ImageGallery&fields=IsWithLigth&fields=LocationInfo&fields=DistanceLength&fields=HasFreeEntrance&removenullvalues=true&getasidarray=false`)).json();
      allData = [...allData, ...(res.Items || [])];
    }
    setData(allData);
  };

  useEffect(() => {
    attemptFetchHikes();
  }, []);


  const onUserCompletitionRequest = async (form: FormData) => {
    setLoading(true);
    const promptInstructions = "Act as a hiking assistant. Use the provided hiking data to offer recommendations or insights. Only suggest hikes explicitly present in the data. Avoid mentioning the data source or asking follow-up questions.";

    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3.1",
        prompt: `${promptInstructions} Here is the hiking data: ${JSON.stringify(data)}. User input: ${form.get("user-input")?.toString()}`,
        stream: true,
      }),
    });

    if (!response.body) {
      console.error("No response body");
      return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let done = false;
    let botResponseText = "";

    while (!done) {
      const { value, done: readerDone } = await reader.read();
      done = readerDone;
      if (done) {
        setLoading(false);
      }
      if (value) {
        const decodedValue = decoder.decode(value);
        try {
          const jsonValue = JSON.parse(decodedValue);
          const chunk = jsonValue.response;
          botResponseText += chunk;
          setBotResponse(botResponseText);
        } catch (error) {
          console.log("Error parsing JSON:", error);
        }
      }
    }
  };

  return (
    <div ref={parent} className="h-screen flex items-center justify-center flex-col gap-4">
      {data.length === 0 ? (
        <div className="h-screen flex items-center justify-center flex-col gap-4">
          <div className="flex items-center shadow gap-2.5 bg-neutral-100 border border-neutral-300 p-4 rounded-md">
            <Loader className="animate-spin" size={20} />
            <p className="text-sm">Gathering data from the ODH</p>
          </div>
        </div>
      ) : (
        <>
          {botResponse && (
            <div className="bg-neutral-900 shadow w-[700px] rounded-md p-2 border border-neutral-500">
              <div className="flex items-center mb-2 gap-1 text-white">
                <Bot size={20}></Bot>
                <p className="text-sm">Chatbot Response</p>
              </div>
              <div className="w-full bg-neutral-800 text-white rounded-sm p-2 max-h-[500px] overflow-y-auto">
                <Markdown>{botResponse}
                </Markdown>
              </div>
            </div>
          )}
          <form onSubmit={(e) => {
            e.preventDefault();
            onUserCompletitionRequest(new FormData(e.currentTarget));
          }}>
            <div className="flex relative flex-col items-end">
              <Textarea name="user-input" className="w-[700px] h-[200px] bg-white shadow resize-none">
              </Textarea>
              <Button className="absolute bottom-4 right-4">{loading ? <Loader className="animate-spin" /> : <Send />}</Button>
            </div>
          </form>
        </>
      )}

    </div>
  );
}
