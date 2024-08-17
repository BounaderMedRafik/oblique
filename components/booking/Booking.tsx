"use client";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CreditCard,
  FileBadge,
  Hourglass,
  Layers2,
  Link,
  User,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { MyProjects, Workies } from "../data/categories";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import moment from "moment";
import { Domain, FEATURE_PRICES } from "../data/idontknowhattonamethis";

const Booking = () => {
  const [stepper, setStepper] = useState(1);
  const handleNext = () => {
    setStepper(stepper + 1);
  };
  const handlePrev = () => {
    setStepper(stepper - 1);
  };
  //-
  const [ServiceNiech, setServiceNiech] = useState("select a service");
  const [refrence, setRefrence] = useState("choose a refrence");
  const [design, setDesign] = useState(true);
  const [front, setFront] = useState(true);
  const [back, setBack] = useState(false);
  const [auth, setAuth] = useState(false);
  const [database, setDatabase] = useState(false);
  const [paymentMig, setPaymentMig] = useState(false);
  const [anim, setAnim] = useState(false);
  //--
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  //---
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  console.log(ServiceNiech);

  const [Total, setTotal] = useState(0);

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    // Check each feature and add its price to the total if it's enabled
    if (design) totalPrice += FEATURE_PRICES.design;
    if (front) totalPrice += FEATURE_PRICES.front;
    if (back) totalPrice += FEATURE_PRICES.back;
    if (auth) totalPrice += FEATURE_PRICES.auth;
    if (database) totalPrice += FEATURE_PRICES.database;
    if (paymentMig) totalPrice += FEATURE_PRICES.paymentMig;
    if (anim) totalPrice += FEATURE_PRICES.anim;

    return totalPrice;
  };

  const updateTotalPrice = () => {
    const totalPrice = calculateTotalPrice();
    setTotal(totalPrice);
  };

  useEffect(() => {
    updateTotalPrice();
  }, [design, front, back, auth, database, paymentMig, anim]);

  return (
    <div className="wrapper flex justify-center items-center flex-col">
      <div>
        <Headline />
      </div>
      <div className="mt-24 flex">
        <div className="p-5">
          <div>
            <MyStepper step={stepper} />
          </div>
          <div className="mt-10">
            {stepper == 1 ? (
              <>
                <div className="flex justify-between">
                  <div>
                    <QuestionHeadline
                      headline={"Service selecion"}
                      desc={" Select the service you want to book"}
                    />
                  </div>
                  <div id="questions">
                    <div>
                      <Label>Select a niech service</Label>
                      <Select>
                        <SelectTrigger className="w-96 mt-1">
                          <SelectValue placeholder={ServiceNiech} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {Workies.map((item, i) => (
                              <div
                                className=" p-2 text-sm hover:bg-primary/25 transition-all cursor-pointer flex items-center justify-between"
                                onClick={() => setServiceNiech(item.name)}
                                key={i}
                              >
                                <div>{item.name}</div>
                                <div>{item.icon}</div>
                              </div>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="mt-3">
                      <Label>Your favourite refrence</Label>
                      <Select>
                        <SelectTrigger className="w-96 mt-1">
                          <SelectValue placeholder={refrence} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {MyProjects.map((item, i) => (
                              <div
                                className=" p-2 text-sm hover:bg-primary/25 transition-all cursor-pointer flex items-center justify-between"
                                key={i}
                              >
                                <div onClick={() => setRefrence(item.name)}>
                                  {item.name}
                                </div>
                                <div>
                                  <a
                                    target="_blank"
                                    href={`${Domain}works/project/${item.id}`}
                                  >
                                    <ArrowUpRight size={13} />
                                  </a>
                                </div>
                              </div>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>

                    {ServiceNiech === "Web developpment" ||
                    ServiceNiech === "App developpment" ? (
                      <div className="mt-3">
                        <div className="flex items-center justify-between py-2.5">
                          <div className="flex items-center gap-2">
                            {design ? (
                              <div>
                                <Check size={13} />
                              </div>
                            ) : null}

                            <div>Design</div>
                          </div>
                          <div>
                            <Switch disabled checked />
                          </div>
                        </div>
                        {/* -- */}
                        <div className="flex items-center justify-between py-2.5">
                          <div className="flex items-center gap-2">
                            {front ? (
                              <div>
                                <Check size={13} />
                              </div>
                            ) : null}

                            <div>Front End developpment</div>
                          </div>
                          <div>
                            <Switch disabled checked />
                          </div>
                        </div>
                        {/* -- */}
                        <div className="flex items-center justify-between py-2.5">
                          <div className="flex items-center gap-2">
                            {back ? (
                              <div>
                                <Check size={13} />
                              </div>
                            ) : null}

                            <div>Back End developpment</div>
                          </div>
                          <div>
                            <Switch
                              onClick={() => setBack(!back)}
                              checked={back}
                            />
                          </div>
                        </div>
                        {/* -- */}
                        <div className="flex items-center justify-between py-2.5">
                          <div className="flex items-center gap-2">
                            {auth ? (
                              <div>
                                <Check size={13} />
                              </div>
                            ) : null}

                            <div>Authentication</div>
                          </div>
                          <div>
                            <Switch
                              onClick={() => setAuth(!auth)}
                              checked={auth}
                            />
                          </div>
                        </div>
                        {/* -- */}
                        <div className="flex items-center justify-between py-2.5">
                          <div className="flex items-center gap-2">
                            {database ? (
                              <div>
                                <Check size={13} />
                              </div>
                            ) : null}

                            <div>Database</div>
                          </div>
                          <div>
                            <Switch
                              onClick={() => setDatabase(!database)}
                              checked={database}
                            />
                          </div>
                        </div>
                        {/* -- */}
                        <div className="flex items-center justify-between py-2.5">
                          <div className="flex items-center gap-2">
                            {paymentMig ? (
                              <div>
                                <Check size={13} />
                              </div>
                            ) : null}

                            <div>Payment Migration</div>
                          </div>
                          <div>
                            <Switch
                              onClick={() => setPaymentMig(!paymentMig)}
                              checked={paymentMig}
                            />
                          </div>
                        </div>
                        {/* -- */}
                        <div className="flex items-center justify-between py-2.5">
                          <div className="flex items-center gap-2">
                            {anim ? (
                              <div>
                                <Check size={13} />
                              </div>
                            ) : null}

                            <div>Animations</div>
                          </div>
                          <div>
                            <Switch
                              onClick={() => setAnim(!anim)}
                              checked={anim}
                            />
                          </div>
                        </div>
                      </div>
                    ) : null}
                    <div className="flex items-center justify-end mt-5 gap-1">
                      <Button disabled>Previous</Button>
                      <Button onClick={handleNext}>Next</Button>
                    </div>
                  </div>
                </div>
              </>
            ) : stepper == 2 ? (
              <>
                <div className="flex justify-between">
                  <div>
                    <QuestionHeadline
                      headline={"Service selecion"}
                      desc={" Select the service you want to book"}
                    />
                  </div>
                  <div id="questions">
                    <div>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-3xl border "
                      />
                      <div className="flex items-center justify-end pt-5 opacity-75">
                        {moment(date).format("MMM Do 20YY")}
                      </div>
                    </div>
                    <div className="flex items-center justify-end mt-5 gap-1">
                      <Button onClick={handlePrev}>Previous</Button>
                      <Button onClick={handleNext}>Next</Button>
                    </div>
                  </div>
                </div>
              </>
            ) : stepper == 3 ? (
              <>
                <div>
                  <div className="flex justify-between">
                    <div>
                      <QuestionHeadline
                        headline={"Enter your personal inforamtions"}
                        desc={
                          "please be precise and check you informations befor submitting"
                        }
                      />
                    </div>
                    <div id="questions">
                      <div>
                        <div className="  max-w-xl w-full">
                          <Label>Full Name</Label>
                          <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            size={150}
                            className="mt-1"
                            type="text"
                            placeholder="Bounader med rafik"
                          />
                        </div>
                        <div className="  max-w-xl w-full mt-3">
                          <Label>Phone</Label>
                          <div className="relative">
                            <Input
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              size={150}
                              className="mt-1 pl-14"
                              type="number"
                              placeholder="6497 12 16 48"
                            />
                            <div className="absolute left-2.5 top-1/2 -translate-y-1/2 text-sm opacity-75">
                              +213
                            </div>
                          </div>
                        </div>
                        <div className="  max-w-xl w-full mt-3">
                          <Label>Email</Label>
                          <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            size={150}
                            className="mt-1"
                            type="text"
                            placeholder="rafikbn666@gmail.com"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-end mt-5 gap-1">
                        <Button onClick={handlePrev}>Previous</Button>
                        <Button onClick={handleNext}>Next</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : stepper == 4 ? (
              <>
                <div>
                  <div className="flex justify-between">
                    <div>
                      <QuestionHeadline
                        headline={"Cinfirm the booking informations"}
                        desc={
                          "Feel free to change booking informations to suit your needs"
                        }
                      />
                    </div>
                    <div id="questions">
                      <div className=" max-w-2xl p-5">
                        <h2>Personal informations</h2>
                        <ul>
                          <li>
                            Your full name :{" "}
                            {name ? (
                              <span className=" italic font-semibold text-primary">
                                {name}
                              </span>
                            ) : (
                              <span className="text-destructive">
                                You didn&apos;t Provide your full name
                              </span>
                            )}
                          </li>
                          <li>
                            Your email :{" "}
                            {email ? (
                              <span className=" italic font-semibold text-primary">
                                {email}
                              </span>
                            ) : (
                              <span className="text-destructive">
                                You didn&apos;t Provide your email
                              </span>
                            )}
                          </li>
                          <li>
                            Your Phone Number :{" "}
                            {phone ? (
                              <span className=" italic font-semibold text-primary">
                                +213 {phone}
                              </span>
                            ) : (
                              <span className="text-destructive">
                                You didn&apos;t Provide your phone number
                              </span>
                            )}
                          </li>
                        </ul>
                        <h2>Service & product</h2>
                        <h3>
                          Service selected :{" "}
                          {ServiceNiech ? (
                            <span className=" text-primary">
                              {ServiceNiech}
                            </span>
                          ) : (
                            <span className=" text-destructive">
                              Please select a service
                            </span>
                          )}
                        </h3>
                        <h3>
                          Refrence Selected :{" "}
                          {refrence ? (
                            <span className=" text-primary">
                              {refrence}{" "}
                              <span>
                                {MyProjects.filter(
                                  (item) => refrence == item.name
                                ).map((item, i) => (
                                  <a
                                    key={i}
                                    target="_blank"
                                    href={`${Domain}works/project/${item.id}`}
                                  >
                                    🔗
                                  </a>
                                ))}
                              </span>
                            </span>
                          ) : (
                            <span className=" text-destructive">
                              Please select a service
                            </span>
                          )}
                        </h3>
                        <h4>choosen Price Structure</h4>
                        {ServiceNiech == "Web developpment" ||
                        ServiceNiech == "App developpment" ? (
                          <ul>
                            {" "}
                            {design ? (
                              <li>
                                {" "}
                                Designs{" "}
                                <span className="italic text-primary">
                                  {" "}
                                  (3000da){" "}
                                </span>{" "}
                              </li>
                            ) : null}{" "}
                            {front ? (
                              <li>
                                {" "}
                                Front End Developpment{" "}
                                <span className="italic text-primary">
                                  {" "}
                                  (4500da){" "}
                                </span>{" "}
                              </li>
                            ) : null}{" "}
                            {back ? (
                              <li>
                                {" "}
                                Back End Developpment{" "}
                                <span className="italic text-primary">
                                  {" "}
                                  (3500da){" "}
                                </span>{" "}
                              </li>
                            ) : null}{" "}
                            {auth ? (
                              <li>
                                {" "}
                                Authentication{" "}
                                <span className="italic text-primary">
                                  {" "}
                                  (2500da){" "}
                                </span>{" "}
                              </li>
                            ) : null}{" "}
                            {database ? (
                              <li>
                                {" "}
                                Database{" "}
                                <span className="italic text-primary">
                                  {" "}
                                  (3500da){" "}
                                </span>{" "}
                              </li>
                            ) : null}{" "}
                            {paymentMig ? (
                              <li>
                                {" "}
                                Payment Migration{" "}
                                <span className="italic text-primary">
                                  {" "}
                                  (4000da){" "}
                                </span>{" "}
                              </li>
                            ) : null}{" "}
                            {anim ? (
                              <li>
                                {" "}
                                Animations{" "}
                                <span className="italic text-primary">
                                  {" "}
                                  (1500da){" "}
                                </span>{" "}
                              </li>
                            ) : null}{" "}
                          </ul>
                        ) : null}
                        <h2>
                          Total Price :{" "}
                          <span className="text-primary italic">{Total}da</span>
                        </h2>
                      </div>

                      <div className="flex items-center justify-end mt-5 gap-1">
                        <Button onClick={handlePrev}>Previous</Button>
                        <Button onClick={handleNext}>
                          <div className="flex items-center gap-2">
                            <div>submit</div>
                            <div>
                              <ArrowRight size={15} />
                            </div>
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const IconSize = 15;

const bookingSteps = [
  {
    id: 1,
    step: "Select service or product",
    icon: <Layers2 size={IconSize} />,
  },
  { id: 2, step: "Choose date and time", icon: <Hourglass size={IconSize} /> },
  { id: 3, step: "Enter customer information", icon: <User size={IconSize} /> },
  {
    id: 4,
    step: "Review and confirm booking",
    icon: <Check size={IconSize} />,
  },
];

const Headline = () => {
  return (
    <div className=" w-full">
      <div className="flex w-full items-center justify-between">
        <div className="text-4xl font-Climate uppercase max-w-md">
          Secure your <span className="text-primary">booking</span> now.{" "}
        </div>
        <div className=" max-w-md text-end opacity-75">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          est suscipit quas dolorum fugiat atque!
        </div>
      </div>
    </div>
  );
};

const MyStepper = ({ step }: { step: number }) => {
  return (
    <div className=" w-full ">
      <div className="grid grid-cols-5 gap-2 mx-auto w-fit">
        {bookingSteps.map((item, i) => (
          <div key={i}>
            <div
              className={cn(
                "flex items-center gap-2 justify-center px-3 py-1 rounded-lg ",
                i === step - 1 ? "bg-primary/25" : ""
              )}
            >
              <div>{item.icon}</div>
              <div className="text-sm">{item.step}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const QuestionHeadline = ({
  headline,
  desc,
}: {
  headline: string;
  desc: string;
}) => {
  return (
    <div>
      <div className="text-2xl font-semibold">{headline}</div>
      <div className="text-sm mt-1 opacity-75">{desc}</div>
    </div>
  );
};

export default Booking;
